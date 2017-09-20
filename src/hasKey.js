// @flow

import type {Composite, Key} from "./types";

/**
 * Returns true if key is included in composite's own enumerable ones,
 * or false otherwise.
 */
const hasKey = (key: Key, composite: Composite) =>
  Object.prototype.hasOwnProperty.call(composite, key);

export default hasKey;
