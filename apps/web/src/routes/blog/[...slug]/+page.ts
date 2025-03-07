import { error } from "@sveltejs/kit";

import { getPost } from "$lib/posts";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await getPost(params.slug);

    return post;
  } catch (e) {
    error(404, `Could not find post: ${params.slug}`);
  }
};
