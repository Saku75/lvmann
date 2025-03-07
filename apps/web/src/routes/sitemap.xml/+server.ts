import { response } from "super-sitemap";

import { getPosts } from "$lib/posts";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const postSlugs = getPosts().map((post) => post.slug);

  return await response({
    origin: url.origin,
    paramValues: {
      "/blog/[...slug]": postSlugs,
    },
  });
};
