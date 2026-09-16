import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({mode}) => {
 const origin = loadEnv(mode, '.', 'VITE_').VITE_SITE_URL?.replace(/\/$/, '');
 let validOrigin: string | undefined;
 try { if (origin && new URL(origin).protocol === 'https:') validOrigin = new URL(origin).origin; } catch { /* Unset until the deployment domain is known. */ }
 return { plugins: [react(), tailwindcss(), {name:'portfolio-metadata',transformIndexHtml(){return validOrigin ? [
 {tag:'link',attrs:{rel:'canonical',href:validOrigin},injectTo:'head' as const},
 {tag:'meta',attrs:{property:'og:url',content:validOrigin},injectTo:'head' as const},
 {tag:'meta',attrs:{property:'og:image',content:`${validOrigin}/social-preview.png`},injectTo:'head' as const},
 {tag:'meta',attrs:{name:'twitter:image',content:`${validOrigin}/social-preview.png`},injectTo:'head' as const}
 ] : [];}}] };
});
