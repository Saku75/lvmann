<script lang="ts">
  import Construction from "@lucide/svelte/icons/construction";

  import CenterContent from "$lib/components/utils/center-content.svelte";

  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
</script>

<main>
  <CenterContent class="grid h-full place-items-center">
    {#if data.posts.length}
      <ul>
        {#each data.posts as post}
          <li class="post">
            <a href={`blog/${post.slug}`} class="title">{post.title}</a>
            <p class="date">{post.date}</p>
            <p class="description">{post.description}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <div class="flex flex-col gap-2 px-4 text-center">
        <h1
          class="flex items-center justify-center gap-2 text-4xl font-medium sm:text-5xl md:text-6xl"
        >
          <Construction
            class="hidden h-12 w-12 sm:block md:h-[3.75rem] md:w-[3.75rem]"
          />
          No Posts Yet
        </h1>
        <p>
          Nothing to see here… yet! Come back later for insights, deep dives,
          and tech talk.
        </p>
      </div>
    {/if}
  </CenterContent>
</main>
