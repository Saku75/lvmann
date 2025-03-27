<script lang="ts">
  import { page } from "$app/state";

  import CenterContent from "$lib/components/utils/center-content.svelte";
  import cn from "$lib/utils/cn";

  const mail = page.url.origin.endsWith(".dk")
    ? "lukas@lvmann.dk"
    : "lukas@lvmann.io";

  const labelClasses = cn("flex flex-col gap-0.5");
  const inputClasses = cn(
    "rounded border border-stone-400 bg-stone-50 px-2 py-1 dark:border-stone-600 dark:bg-stone-950",
  );
</script>

<main>
  <CenterContent class="grid h-full max-w-[40rem]  place-items-center">
    <div class="flex w-full flex-col gap-2 px-4">
      <CenterContent class="flex max-w-[23rem] flex-col gap-2 text-center">
        <h1 class="text-4xl font-medium sm:text-5xl md:text-6xl">
          Get in touch
        </h1>
        <p>
          Whether you have a project in mind, a question, or just want to say
          hi, feel free to reach out!
        </p>
        <p>
          You can reach me at: <a
            class="text-red-600 transition-colors hover:text-red-800 focus:text-red-800 active:text-red-950 dark:text-red-400 dark:hover:text-red-200 dark:focus:text-red-200 dark:active:text-red-50"
            href={`mailto:${mail}`}
          >
            {mail}
          </a>
        </p>
      </CenterContent>
      <!-- <form method="POST" novalidate use:enhance class="flex flex-col gap-2">
        <label class={labelClasses}>
          Name
          <input
            type="text"
            class={inputClasses}
            name="name"
            autocomplete="name"
          />
        </label>
        <label class={labelClasses}>
          Email
          <input
            type="email"
            class={inputClasses}
            name="email"
            autocomplete="email"
            required
          />
        </label>
        <label class={labelClasses}>
          Message
          <textarea class={inputClasses} name="message" required></textarea>
        </label>
        <Button purpose="button" type="submit">Send</Button>
      </form>
      <small class="text-center">
        Prefer email? Reach me at
        <a
          class="text-red-600 transition-colors hover:text-red-800 focus:text-red-800 active:text-red-950 dark:text-red-400 dark:hover:text-red-200 dark:focus:text-red-200 dark:active:text-red-50"
          href={`mailto:${mail}`}
        >
          {mail}
        </a>
      </small> -->
    </div>
  </CenterContent>
</main>
