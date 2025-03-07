<script lang="ts">
  import type { Metadata } from "$lib/types/metadata";

  interface Props {
    data?: Metadata;
  }

  const { data }: Props = $props();

  let title = $derived.by(() =>
    data?.title ? `${data.title.join(" | ")} | LVMann` : "LVMann",
  );
</script>

<svelte:head>
  <title>{title}</title>
  {#if data?.description}
    <meta name="description" content={data.description} />
  {/if}
  {#if data?.keywords}
    <meta name="keywords" content={data.keywords.join(", ")} />
  {/if}
  {#if data?.author}
    <meta name="author" content={data.author} />
  {/if}
</svelte:head>
