<script lang="ts">
  import { slide } from "svelte/transition";

  import { page } from "$app/state";

  import Footer from "$lib/components/layout/footer.svelte";
  import Header from "$lib/components/layout/header.svelte";
  import Menu from "$lib/components/layout/menu.svelte";
  import Navigation from "$lib/components/navigation/navigation.svelte";
  import Theme from "$lib/components/theme-switcher/theme.svelte";
  import Metadata from "$lib/components/utils/metadata.svelte";
  import { LayoutMenuContent } from "$lib/enums/layout.menu-content";
  import { layoutStore } from "$lib/stores/layout.svelte";
  import { versionStore } from "$lib/stores/version.svelte";

  import "../app.css";
  import type { LayoutProps } from "./$types";

  let { data, children }: LayoutProps = $props();

  versionStore.version = data.appVersion;
  layoutStore.theme = data.themePreference;
</script>

<svelte:window
  bind:innerHeight={layoutStore.size.height}
  bind:innerWidth={layoutStore.size.width}
/>

<Metadata data={page.data.metadata} />

<Header />

<Menu>
  {#if layoutStore.menu.content === LayoutMenuContent.Navigation}
    <div transition:slide={{ duration: 200 }}>
      <Navigation type="list" />
    </div>
  {/if}

  {#if layoutStore.menu.content === LayoutMenuContent.Theme}
    <div transition:slide={{ duration: 200 }}>
      <Theme />
    </div>
  {/if}
</Menu>

{@render children()}

<Footer />
