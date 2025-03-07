<script lang="ts">
  import "@fontsource-variable/inter";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<nav>
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
</nav>

{@render children()}
