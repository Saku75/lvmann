import { error } from "@sveltejs/kit";

import { getPost } from "$lib/posts";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await getPost(params.slug);

    return {
      post,
      metadata: {
        title: [post.metadata.title, "Blog"],
        description: post.metadata.description,
        keywords: post.metadata.categories,
        author: post.metadata.author,
      },
    };
  } catch (e) {
    error(404, `Could not find post: ${params.slug}`);
  }
};
