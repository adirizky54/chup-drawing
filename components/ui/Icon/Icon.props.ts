import type { WithClass } from "@/utils";

import iconsHealth from "@iconify-json/healthicons/icons.json";
import iconsPh from "@iconify-json/ph/icons.json";
import iconsRi from "@iconify-json/ri/icons.json";
import iconsMdi from "@iconify-json/mdi/icons.json";

type HealthIcon = keyof (typeof iconsHealth)["icons"];
type PhIcon = keyof (typeof iconsPh)["icons"];
type RiIcon = keyof (typeof iconsRi)["icons"];
type MdiIcon = keyof (typeof iconsMdi)["icons"];
export type IconName = `i-healthicons-${HealthIcon}` | `i-ph-${PhIcon}` | `i-ri-${RiIcon}` | `i-mdi-${MdiIcon}`;

export type IconProps = {
  /**
   * @description Name of an icon, Use the `name` prop by following this pattern: `i-{collection-name}-{icon-name}`. This project uses Remix Icons and Phosphor Icons.
   * @see https://icones.js.org/collection/healthicons (Healh Icons)
   * @see https://icones.js.org/collection/ph (Phosphor Icons)
   * @see https://icones.js.org/collection/mdi (Material Design Icons)
   * @see https://icones.js.org/collection/ri (Remix Icons)
   */
  name: IconName;
} & WithClass;
