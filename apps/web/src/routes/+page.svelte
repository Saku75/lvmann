<script lang="ts">
  import type { Icon } from "@lucide/svelte";

  import Akamai from "$lib/components/icons/akamai.svelte";
  import CloudflarePages from "$lib/components/icons/cloudflare-pages.svelte";
  import CloudflareWorkers from "$lib/components/icons/cloudflare-workers.svelte";
  import Cloudflare from "$lib/components/icons/cloudflare.svelte";
  import Debian from "$lib/components/icons/debian.svelte";
  import Docker from "$lib/components/icons/docker.svelte";
  import Dotnet from "$lib/components/icons/dotnet.svelte";
  import GithubActions from "$lib/components/icons/github-actions.svelte";
  import Github from "$lib/components/icons/github.svelte";
  import Javascript from "$lib/components/icons/javascript.svelte";
  import Node from "$lib/components/icons/node.svelte";
  import Rust from "$lib/components/icons/rust.svelte";
  import Svelte from "$lib/components/icons/svelte.svelte";
  import Tailwindcss from "$lib/components/icons/tailwindcss.svelte";
  import Tauri from "$lib/components/icons/tauri.svelte";
  import Tyepscript from "$lib/components/icons/tyepscript.svelte";
  import Vue from "$lib/components/icons/vue.svelte";
  import CenterContent from "$lib/components/utils/center-content.svelte";
  import cn from "$lib/utils/cn";

  const whatIBuildWith: {
    text: string;
    size: "small" | "big";
    color: string;
    Icon?: typeof Icon;
  }[] = [
    {
      text: "Github",
      size: "big",
      color: cn(
        "hocus:border-stone-900 hocus:text-stone-900 dark:hocus:border-stone-100 dark:hocus:text-stone-100",
      ),
      Icon: Github,
    },
    {
      text: "Github Actions",
      size: "small",
      color: cn("hocus:border-blue-500 hocus:text-blue-500"),
      Icon: GithubActions,
    },
    {
      text: "Cloudflare",
      size: "big",
      color: cn("hocus:border-orange-500 hocus:text-orange-500"),
      Icon: Cloudflare,
    },
    {
      text: "Cloudflare Pages",
      size: "small",
      color: cn("hocus:border-orange-500 hocus:text-orange-500"),
      Icon: CloudflarePages,
    },
    {
      text: "Cloudflare Workers",
      size: "small",
      color: cn("hocus:border-orange-500 hocus:text-orange-500"),
      Icon: CloudflareWorkers,
    },
    {
      text: "TypeScript",
      size: "big",
      color: cn("hocus:border-blue-500 hocus:text-blue-500"),
      Icon: Tyepscript,
    },
    {
      text: "JavaScript",
      size: "small",
      color: cn("hocus:border-yellow-500 hocus:text-yellow-500"),
      Icon: Javascript,
    },
    {
      text: "Rust",
      size: "big",
      color: cn("hocus:border-orange-600 hocus:text-orange-600"),
      Icon: Rust,
    },
    {
      text: "Dotnet",
      size: "small",
      color: cn("hocus:border-purple-500 hocus:text-purple-500"),
      Icon: Dotnet,
    },
    {
      text: "Docker",
      size: "small",
      color: cn("hocus:border-blue-500 hocus:text-blue-500"),
      Icon: Docker,
    },
    {
      text: "Svelte",
      size: "big",
      color: cn("hocus:border-orange-600 hocus:text-orange-600"),
      Icon: Svelte,
    },
    {
      text: "Vue.js",
      size: "small",
      color: cn("hocus:border-green-400 hocus:text-green-400"),
      Icon: Vue,
    },
    {
      text: "Tailwind CSS",
      size: "small",
      color: cn("hocus:border-sky-500 hocus:text-sky-500"),
      Icon: Tailwindcss,
    },
    {
      text: "Node.js",
      size: "small",
      color: cn("hocus:border-green-500 hocus:text-green-500"),
      Icon: Node,
    },
    {
      text: "Tauri",
      size: "small",
      color: cn("hocus:border-yellow-500 hocus:text-yellow-500"),
      Icon: Tauri,
    },
    {
      text: "Akamai",
      size: "small",
      color: cn("hocus:border-sky-500 hocus:text-sky-500"),
      Icon: Akamai,
    },
    {
      text: "Akamai",
      size: "small",
      color: cn("hocus:border-pink-700 hocus:text-pink-700"),
      Icon: Debian,
    },
  ];
</script>

<main
  class="row-span-2 row-start-1 *:border-b *:border-stone-400 *:dark:border-stone-600"
>
  <section
    class="-z-10 flex h-svh items-center justify-center overflow-hidden bg-stone-200 bg-radial from-stone-400 from-[1px] to-transparent to-[1px] bg-[size:20px_20px] bg-center dark:bg-stone-800 dark:from-stone-600"
  >
    <CenterContent class="flex justify-center">
      <div class="group grid place-items-center *:col-start-1 *:row-start-1">
        <div class="z-1 flex max-w-[45rem] flex-col gap-2 px-4 text-center">
          <h1
            class="text-5xl font-medium sm:text-6xl md:text-7xl dark:drop-shadow-[0_4px_4px_rgba(28,25,23,0.8)]"
          >
            Lukas Vendel Mann
          </h1>
          <p
            class="font-heading text-4xl sm:text-5xl md:text-6xl dark:drop-shadow-[0_4px_4px_rgba(28,25,23,0.8)]"
          >
            Software Developer
          </p>
          <p
            class="rounded border border-stone-400 bg-stone-100/50 px-2 py-1 backdrop-blur dark:border-stone-600 dark:bg-stone-900/50"
          >
            I'm a software developer passionate about building user-focused,
            high-performance apps and distributed systems. Explore my work,
            check out my blog, or get in touch!
          </p>
        </div>
        <div
          class="grid max-h-[40rem] min-h-[30rem] max-w-[40rem] items-center overflow-clip object-cover object-center drop-shadow-lg *:col-start-1 *:row-start-1"
        >
          <enhanced:img
            src="$lib/images/logo-outline_light.min.svg"
            alt="LVMann logo outline: light theme"
            fetchpriority="high"
            class="-z-1 h-full object-cover object-center opacity-0 transition duration-500 group-hover:-translate-x-3/48 group-hover:translate-y-2/48 group-hover:opacity-100 dark:hidden"
          />
          <enhanced:img
            src="$lib/images/logo-outline_dark.min.svg"
            alt="LVMann logo outline: dark theme"
            fetchpriority="high"
            class="-z-1 hidden h-full object-cover object-center opacity-0 transition duration-500 group-hover:-translate-x-3/48 group-hover:translate-y-2/48 group-hover:opacity-100 dark:block"
          />
          <enhanced:img
            src="$lib/images/logo.min.svg"
            alt="LVMann logo"
            fetchpriority="high"
            class="h-full object-cover object-center drop-shadow-lg transition duration-500 group-hover:translate-x-3/48 group-hover:-translate-y-2/48"
          />
        </div>
      </div>
    </CenterContent>
  </section>
  <section>
    <CenterContent class="flex flex-col gap-2 px-2 py-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl">What I Build With</h2>
      <div
        class="grid grid-flow-dense grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2"
      >
        {#each whatIBuildWith as { text, color, size, Icon }}
          <button
            class={cn(
              "group grid aspect-square place-items-center overflow-hidden rounded border border-stone-400 bg-stone-200 text-stone-600 transition duration-500 *:col-start-1 *:row-start-1 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-400",
              {
                "col-span-1 row-span-1": size === "small",
                "col-span-2 row-span-2": size === "big",
              },
              color,
            )}
          >
            <Icon class="h-full w-full p-[15%]" />
            <p
              class={cn(
                "flex h-full w-full items-center justify-center bg-stone-100/50 text-center font-heading font-medium text-stone-950 opacity-0 backdrop-blur-xs backdrop-opacity-0 transition duration-250 group-hocus:opacity-100 group-hocus:backdrop-opacity-100 dark:bg-stone-900/50 dark:text-stone-50",
                {
                  "text-xs": size === "small",
                  "text-xl": size === "big",
                },
              )}
            >
              {text}
            </p>
          </button>
        {/each}
      </div>
    </CenterContent>
  </section>
  <dir class="h-[30rem]"></dir>
</main>
