// @flow

import type {Key, Composite} from "./types";

/**
 * Get property value of given key.
 */
const get = (key: Key, composite: Composite) => composite[(key: any)];

export default get;
