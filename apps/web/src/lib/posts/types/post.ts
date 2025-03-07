import { SvelteComponent } from "svelte";

type PostContent = typeof SvelteComponent;

type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: string[];
  published: boolean;
};

type Post = {
  content: PostContent;
  metadata: PostMetadata;
};

type PostRaw = {
  default: typeof SvelteComponent;
  metadata: Record<string, unknown>;
};

export type { Post, PostContent, PostMetadata, PostRaw };
