import { getPosts } from "$lib/posts";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const posts = getPosts();

  return {
    posts,
    metadata: {
      title: ["Blog"],
      description: "Lukas Vendel Mann's blog",
      author: "Lukas Vendel Mann",
    },
  };
};
