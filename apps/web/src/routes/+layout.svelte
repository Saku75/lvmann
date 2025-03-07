<script lang="ts">
  import "@fontsource-variable/inter";

  import { page } from "$app/state";

  import Footer from "$lib/components/layout/footer.svelte";
  import Header from "$lib/components/layout/header.svelte";
  import Menu from "$lib/components/layout/menu.svelte";
  import Navigation from "$lib/components/navigation/navigation.svelte";
  import Metadata from "$lib/components/utils/metadata.svelte";
  import { layoutStore } from "$lib/stores/layout.svelte";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<svelte:window
  bind:innerHeight={layoutStore.size.height}
  bind:innerWidth={layoutStore.size.width}
/>

<Metadata data={page.data.metadata} />

<Header />

<Menu>
  <Navigation />
</Menu>

{@render children()}

<Footer />
