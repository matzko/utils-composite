// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

/**
 * Get property value of given key.
 */
function get(key: Key, composite: Composite): any {
  return composite[key];
}

export default curry(get);
