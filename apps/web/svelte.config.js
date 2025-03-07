import adapter from "@sveltejs/adapter-cloudflare-workers";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex({ extensions: [".md"] })],

  kit: {
    adapter: adapter(),
    alias: {
      $routes: "./src/routes",
      $posts: "./src/posts",
    },
  },
};

export default config;
