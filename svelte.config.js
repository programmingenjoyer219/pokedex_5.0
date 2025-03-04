import adapter from "@sveltejs/adapter-vercel";

function generateEntries() {
    var result = [];
    for (let i = 1; i <= 898; i += 1) {
        result.push(`/pokemon/${i}`);
    }
    return result;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            $styles: "./src/styles",
            $components: "./src/components",
            $features: "./src/features",
        },
        prerender: {
            crawl: true,
            entries: ["*", ...generateEntries()],
        },
    },
};

export default config;
