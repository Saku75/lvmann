<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<svelte:head>
  <title>{data.metadata.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.metadata.title} />
</svelte:head>

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
