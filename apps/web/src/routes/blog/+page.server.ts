import { getPosts } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = getPosts();

  return {
    posts,
    metadata: {
      title: ["Personal Blog"],
      description:
        "Read my latest thoughts on software development, distributed systems, and building high-performance applications.",
      author: "Lukas Vendel Mann",
    },
  };
};
