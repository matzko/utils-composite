// @flow

import shallowCopy from "./shallowCopy";

import type {Composite, Key} from "./types";

/**
 * Returns a new composite with the result of having updated the property with
 * the given key with the specified value.
 */
const set = (key: Key, value: mixed, composite: Composite) => {
  const copy = shallowCopy(composite);

  copy[(key: any)] = value;

  return copy;
};

export default set;
