const toKebabCase = (value: string) => {
  return value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const makeStaticClass = <T extends string>(component: string) => {
  return function (slot: T) {
    if (slot === "root") {
      return toKebabCase(`chup-${component}`);
    }

    return toKebabCase(`chup-${component}-${slot}`);
  };
};
