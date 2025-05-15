import { response } from "super-sitemap";

import { getPosts } from "$lib/posts";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url, platform }) => {
  const postSlugs = getPosts().map((post) => post.slug);

  return await response({
    origin: platform?.env.HOSTNAME_CANONICAL!,
    paramValues: {
      "/blog/[...slug]": postSlugs,
    },
  });
};
