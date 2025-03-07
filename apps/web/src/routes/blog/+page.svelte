<script lang="ts">
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<ul>
  {#each data.posts as post}
    <li class="post">
      <a href={`blog/${post.slug}`} class="title">{post.title}</a>
      <p class="date">{post.date}</p>
      <p class="description">{post.description}</p>
    </li>
  {/each}
</ul>
