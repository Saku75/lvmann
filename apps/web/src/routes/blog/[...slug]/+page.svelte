<script lang="ts">
  import { metadataStore } from "$lib/stores/metadata.svelte";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  metadataStore.title = [data.metadata.title, "Blog"];
  metadataStore.description = data.metadata.description;
</script>

<article>
  <hgroup>
    <h1>{data.metadata.title}</h1>
    <p>Published at {data.metadata.date}</p>
  </hgroup>

  <div>
    {#each data.metadata.categories as category}
      <span>&num;{category}</span>
    {/each}
  </div>

  <div>
    <data.content />
  </div>
</article>
