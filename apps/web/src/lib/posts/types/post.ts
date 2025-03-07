import { SvelteComponent } from "svelte";

type PostContent = typeof SvelteComponent;

type PostMetadata = {
  title: string;
  description: string;
  author: string;

  date: string;
  published: boolean;

  categories: string[];

  slug: string;
};

type Post = {
  Content: PostContent;
  metadata: PostMetadata;
};

type PostRaw = {
  default: typeof SvelteComponent;
  metadata: Record<string, unknown>;
};

export type { Post, PostContent, PostMetadata, PostRaw };
