import adapter from "@sveltejs/adapter-cloudflare-workers";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $routes: "./src/routes",
    },
  },
};

export default config;
