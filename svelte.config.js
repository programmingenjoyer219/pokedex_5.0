import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $styles: "./src/styles",
      $components: "./src/components",
      $features: "./src/features",
    },
  },
};

export default config;
