import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const preload: Handle = async ({ event, resolve }) => {
  return await resolve(event, {
    preload: ({ type, path }) => {
      const preloadedType: boolean = ["font", "css", "js"].includes(type);
      const preloadedPath: boolean =
        type === "font" ? path.includes("latin") : true;
      return preloadedType && preloadedPath;
    },
  });
};

export const handle = sequence(preload);
