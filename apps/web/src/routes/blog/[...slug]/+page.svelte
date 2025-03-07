<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  const { metadata, Content } = data.post;
</script>

<article>
  <hgroup>
    <h1>{metadata.title}</h1>
    <p>Published at {metadata.date}</p>
  </hgroup>

  <div>
    {#each metadata.categories as category}
      <span>&num;{category}</span>
    {/each}
  </div>

  <div>
    <Content />
  </div>
</article>
