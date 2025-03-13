import { LayoutTheme } from "$lib/enums/layout.theme";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies }) => {
  const themePreferenceCookie =
    (cookies.get("theme-preference") as LayoutTheme) || LayoutTheme.System;

  return {
    themePreference: themePreferenceCookie,
  };
};
