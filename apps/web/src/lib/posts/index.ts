import type { Post, PostMetadata, PostRaw } from "$lib/posts/types/post";

function getPosts() {
  let posts: PostMetadata[] = [];

  const paths = {
    ...import.meta.glob("/src/posts/*.md", { eager: true }),
    ...import.meta.glob("/src/posts/**/*.md", { eager: true }),
  };

  for (const path in paths) {
    const file = paths[path] as PostRaw;
    let slug;
    if (path.endsWith("index.md") && path.split("/").length > 4) {
      slug = path.split("/").slice(3, -1).join("/");
    } else {
      slug = path.split("/").slice(3).join("/").replace(".md", "");
    }

    if (file && slug) {
      const metadata = file.metadata as Omit<PostMetadata, "slug">;
      const post = { ...metadata, slug } satisfies PostMetadata;
      post.published && posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}

async function getPost(slug: string) {
  const postRaw = (await import(
    /* @vite-ignore */ `/src/posts/${slug}.md`
  )) as PostRaw;

  return {
    metadata: postRaw.metadata as PostMetadata,
    content: postRaw.default,
  } satisfies Post;
}

export { getPost, getPosts };
