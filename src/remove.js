// @flow

import type {Composite, Key} from "./types";

// $FlowFixMe: flow does not understand the following construction
const objectRemove = (key, {[key]: removed, ...rest}) => rest;

const arrayRemove = (index, array) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

/**
 * Returns a new composite with the result of having removed the property with
 * the given key.
 */
const remove = (key: Key, composite: Composite) =>
  Array.isArray(composite)
    ? arrayRemove((key: any), composite)
    : objectRemove(key, composite);

export default remove;
