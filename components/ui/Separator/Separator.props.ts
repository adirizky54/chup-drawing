import type { SeparatorProps as RSeparatorProps } from "radix-vue";
import type { WithClass } from "@/utils";

/**
 * API Reference SeparatorProps
 * @see https://www.radix-vue.com/components/separator.html#root
 */
export type SeparatorProps = Omit<RSeparatorProps, "as" | "asChild"> & WithClass;
