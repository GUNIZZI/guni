import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
    const isProduction = mode === 'production';

    return {
        base: '/',
        plugins: [react(), mkcert()],
        optimizeDeps: {
            include: ['highlight.js'],
        },
        resolve: {
            alias: [{ find: '@/', replacement: '/src/' }],
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
            },
        },
        build: {
            outDir: '@dist/prod',
            minify: isProduction,
            sourcemap: !isProduction,
            target: 'esnext',
        },
        server: {
            host: 'guni.devel.com',
            open: true,
            port: 9999,
            headers: {
                'Cross-Origin-Embedder-Policy': 'unsafe-none',
            },
        },
    };
});
