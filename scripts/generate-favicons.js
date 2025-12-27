import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const logoPath = join(publicDir, 'logotipo-editado-1.svg');

// Asegurar que el directorio public existe
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

// Tamaños de favicons a generar
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  try {
    console.log('Generando favicons desde:', logoPath);
    
    // Generar cada tamaño de favicon
    for (const { name, size } of faviconSizes) {
      const outputPath = join(publicDir, name);
      // Hacer el logo más grande (90% del tamaño) para que se vea mejor
      const logoSize = Math.floor(size * 0.9);
      
      await sharp(logoPath)
        .resize(logoSize, logoSize, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .extend({
          top: Math.floor((size - logoSize) / 2),
          bottom: Math.ceil((size - logoSize) / 2),
          left: Math.floor((size - logoSize) / 2),
          right: Math.ceil((size - logoSize) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✓ Generado: ${name} (${size}x${size})`);
    }

    // Generar favicon.ico con múltiples tamaños
    const icoSizes = [16, 32, 48];
    const icoImages = await Promise.all(
      icoSizes.map(size =>
        sharp(logoPath)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png()
          .toBuffer()
      )
    );

    // Para favicon.ico, usaremos el tamaño 32x32 como principal
    // Hacer el logo más grande (90% del tamaño) para que se vea mejor
    const icoLogoSize = Math.floor(32 * 0.9);
    const icoPadding = Math.floor((32 - icoLogoSize) / 2);
    
    await sharp(logoPath)
      .resize(icoLogoSize, icoLogoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .extend({
        top: icoPadding,
        bottom: icoPadding,
        left: icoPadding,
        right: icoPadding,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(join(publicDir, 'favicon.ico'));
    
    console.log('✓ Generado: favicon.ico');
    console.log('\n✅ Todos los favicons han sido generados exitosamente!');
  } catch (error) {
    console.error('❌ Error al generar favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

