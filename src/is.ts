// TODO: use @jumpn/utils-object {is} once it is available
const isObject = (thing: string) => thing !== null && typeof thing === "object";

/**
 * Returns true if parameter is a Composite or false otherwise
 */
const is = (thing: any) => Array.isArray(thing) || isObject(thing);

export default is;
