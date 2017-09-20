// @flow

import type {Composite} from "./types";

/**
 * Returns a new composite with the same own enumerable props of the one given.
 */
const shallowCopy = (composite: Composite) =>
  Array.isArray(composite) ? [...composite] : {...composite};

export default shallowCopy;
