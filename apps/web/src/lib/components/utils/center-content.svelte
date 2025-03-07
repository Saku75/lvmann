<script lang="ts">
  import type { Snippet } from "svelte";

  import cn from "$lib/utils/cn";

  interface Props {
    class?: string;
    children: Snippet;
  }

  const { class: classes, children }: Props = $props();
</script>

<div class={cn("mx-auto w-full max-w-[80rem]", classes)}>
  {@render children()}
</div>
