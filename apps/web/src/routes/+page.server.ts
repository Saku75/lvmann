import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    metadata: {
      title: ["Lukas Vendel Mann", "Software developer"],
      description:
        "I'm Lukas Vendel Mann, a software developer passionate about building user- and performance-oriented apps, distributed systems, and scalable software. Explore my projects on Github, or get in touch—let's build something great!",
      author: "Lukas Vendel Mann",
    },
  };
};
