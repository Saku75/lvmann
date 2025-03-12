import { getPosts } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = getPosts();

  return {
    posts,
    metadata: {
      title: ["Blog"],
      description:
        "Read my latest thoughts on software development, distributed systems, and building high-performance applications. Explore tutorials, insights, and deep dives into the world of coding.",
      author: "Lukas Vendel Mann",
    },
  };
};
