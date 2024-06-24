import type { HTMLAttributes } from "vue";

/**
 * Type for providing prop to the component slots.
 *
 * @param T - type of the component slot.
 * @property slotClasses - an object containing CSS classes to be passed to the
 * component slots.
 */
export type SlotProp<T extends string> = {
  /** CSS classes to be passed to the component slots. */
  slotClasses?: Partial<Record<T, string>>;
};

/**
 * The above type is a TypeScript type that represents an object with an optional "class" property of
 * type string.
 * @property {string} class - A string property that represents a CSS class name.
 */
export type WithClass = {
  class?: HTMLAttributes["class"];
};

export type SIDE = "top" | "bottom" | "left" | "right";

export type ALIGN = "center" | "start" | "end";

/**
 * Defines the valid placement of an object.
 */
export type Placement = `${SIDE}-${ALIGN}` | `${SIDE}-${ALIGN}` | `${SIDE}-${ALIGN}`;

/**
 * The function `getValueByNestedKey` retrieves a value from a nested object using a dot-separated key.
 * @param obj - The `obj` parameter is a JavaScript object (or record) that contains key-value pairs.
 * It can be of any depth and can have nested objects.
 * @param {string} nestedKey - The `nestedKey` parameter is a string that represents a nested key in an
 * object. It is a dot-separated string that specifies the path to the desired value within the object.
 * For example, if the object is `{ a: { b: { c: 123 } } }`, the nested
 * @returns the value of the nested key in the given object. If any part of the key is not found, it
 * will return undefined.
 */
export const getValueByNestedKey = (obj: Record<string, any>, nestedKey: string): any => {
  const keys: string[] = nestedKey.split(".");
  let value: Record<string, any> = obj;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      // Return undefined if any part of the key is not found
      return undefined;
    }
  }

  return value;
};

/**
 * The `toArray` function converts a value or an array of values into an array.
 * @param {T | T[]} value - The `value` parameter can be of type `T` or an array of type `T`.
 * @returns The function `toArray` returns an array.
 */
export const toArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== undefined ? [value] : [];
};

/**
 * The `getObject` function retrieves a value from an object using a given path, and returns a default
 * value if the path does not exist.
 * @param object - The `object` parameter is the object from which you want to retrieve a value.
 * @param {(string | number)[] | string} path - The `path` parameter is either an array of strings or
 * numbers, or a string separated by dots. It represents the path to a property in the `object`
 * parameter.
 * @param {any} [defaultValue] - The `defaultValue` parameter is an optional parameter that specifies
 * the value to return if the object does not contain the specified path. If the `defaultValue` is not
 * provided, `undefined` will be returned.
 * @returns The function `getObject` returns the value of the property specified by the `path`
 * parameter in the `object` parameter. If the property does not exist or is `undefined`, it returns
 * the `defaultValue` parameter.
 */
export const getObject = (object: Record<string, any>, path: (string | number)[] | string, defaultValue?: any): any => {
  if (typeof path === "string") {
    path = path.split(".").map((key) => {
      const numKey = Number(key);
      return isNaN(numKey) ? key : numKey;
    });
  }

  let result: any = object;

  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue;
    }

    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
};