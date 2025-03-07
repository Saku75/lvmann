import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const preload: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    preload: ({ type }) => {
      return type === "js" || type === "css" || type === "font";
    },
  });
};

export const handle = sequence(preload);
