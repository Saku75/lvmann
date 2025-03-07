<script lang="ts">
  import { metadataStore } from "$lib/stores/metadata.svelte";

  let title = $derived.by(() =>
    metadataStore.title
      ? `${metadataStore.title.join(" | ")} | LVMann`
      : "LVMann",
  );
</script>

<svelte:head>
  <title>{title}</title>
  {#if metadataStore.description}
    <meta name="description" content={metadataStore.description} />
  {/if}
  {#if metadataStore.keywords}
    <meta name="keywords" content={metadataStore.keywords.join(", ")} />
  {/if}
  {#if metadataStore.author}
    <meta name="author" content={metadataStore.author} />
  {/if}
</svelte:head>
