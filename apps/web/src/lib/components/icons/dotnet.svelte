<script lang="ts">
  import { Icon, type IconProps } from "@lucide/svelte";
  import { siDotnet } from "simple-icons";

  import svgToIconNode from "./utils/svg-to-icon-node";

  const {
    name,
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    ...props
  }: Omit<IconProps, "iconNode" | "children"> = $props();
</script>

<Icon
  {...props}
  iconNode={svgToIconNode(siDotnet.svg)}
  strokeWidth="0"
  fill={color}
/>
