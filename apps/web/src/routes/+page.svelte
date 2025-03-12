<script lang="ts">
  import CenterContent from "$lib/components/utils/center-content.svelte";
</script>

<main class="row-span-2 row-start-1">
  <section
    class="[background-size:40px,40px -z-10 flex h-svh items-center justify-center overflow-hidden border-b border-stone-400 bg-stone-200 bg-radial from-stone-400 from-[1px] to-transparent to-[1px] bg-[size:20px_20px] bg-center dark:border-stone-600 dark:bg-stone-800 dark:from-stone-600"
  >
    <CenterContent class="flex justify-center">
      <div class="group grid place-items-center">
        <div
          class="z-1 col-start-1 row-start-1 flex max-w-[42rem] flex-col gap-2 px-4 text-center dark:drop-shadow-[0_4px_4px_rgba(28,25,23,0.75)]"
        >
          <h1 class="text-5xl font-medium sm:text-6xl md:text-7xl">
            Lukas Vendel Mann
          </h1>
          <p class="font-heading text-4xl sm:text-5xl md:text-6xl">
            Software Developer
          </p>
          <p>
            I'm a software developer passionate about building user-focused,
            high-performance apps and distributed systems. Explore my work,
            check out my blog, or get in touch!
          </p>
        </div>
        <div
          class="col-start-1 row-start-1 grid max-h-[40rem] min-h-[30rem] max-w-[40rem] items-center overflow-clip object-cover object-center drop-shadow-lg"
        >
          <enhanced:img
            src="$lib/images/logo-outline_light.min.svg"
            alt="LVMann logo outline: light theme"
            fetchpriority="high"
            class="-z-1 col-start-1 row-start-1 h-full object-cover object-center opacity-0 transition duration-500 group-hover:-translate-x-3/48 group-hover:translate-y-2/48 group-hover:opacity-100 dark:hidden"
          />
          <enhanced:img
            src="$lib/images/logo-outline_dark.min.svg"
            alt="LVMann logo outline: dark theme"
            fetchpriority="high"
            class="-z-1 col-start-1 row-start-1 hidden h-full object-cover object-center opacity-0 transition duration-500 group-hover:-translate-x-3/48 group-hover:translate-y-2/48 group-hover:opacity-100 dark:block"
          />
          <enhanced:img
            src="$lib/images/logo.min.svg"
            alt="LVMann logo"
            fetchpriority="high"
            class="col-start-1 row-start-1 h-full object-cover object-center drop-shadow-lg transition duration-500 group-hover:translate-x-3/48 group-hover:-translate-y-2/48"
          />
        </div>
      </div>
    </CenterContent>
  </section>
</main>
