// Images shown with a plain <img> (CMS icons and logos). Raster files, such as a PNG uploaded through the CMS, go
// through Netlify's Image CDN: resized to the size they are shown at and served as AVIF/WebP where the browser
// supports it. SVGs are already small and pass through. Off Netlify (local `next dev`/`next start`) the original is
// used, since /.netlify/images only exists on Netlify. NETLIFY is set to "true" in Netlify builds.
const RASTER = /\.(png|jpe?g|webp|avif|gif)$/i;

export function cdnImage(src: string, width: number) {
  if (!RASTER.test(src) || process.env.NETLIFY !== 'true') return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&q=80`;
}
