import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    package: {
      files: (file) => !file.startsWith('cosmetic'),
      exports: (file) => file === 'index.js'
    },
    vite: {
      define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
      },
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: {
          'svelte-materials': path.resolve('./src/lib')
        }
      }
    }
  }
};

export default config;
