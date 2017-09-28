// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Key, Composite} from "./types";

/**
 * Get property value of given key.
 */
const get = (key: Key, composite: Composite): any => composite[(key: any)];

export default curry(get);
