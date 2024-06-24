export type LoadingOverlayProps = {
  /**
   * @description Indicate loading state
   */
  loading: boolean;

  /**
   * @description Size loader icon
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   * @description Customize description content
   */
  description?: string;

  /**
   * @description Controls overlay `z-index`, 400 by default
   */
  zIndex?: number;
};
