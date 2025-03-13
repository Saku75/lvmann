import type { IconNode } from "@lucide/svelte";
import { parseSync } from "svgson";

export default function svgToIconNode(svg: string): IconNode {
  return parseSync(svg).children.map(({ name, attributes }) => [
    name,
    attributes,
  ]);
}
