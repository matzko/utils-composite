// @flow

import isDeepEqual from "fast-deep-equal";
import {curry} from "flow-static-land/lib/Fun";

import getIn from "./getIn";

import type {Composite, Path} from "./types";

/**
 * Returns true if value located at given path is deeply equal to the one
 * specified.
 */
function hasInF(path: Path, value: any, composite: Composite): boolean {
  return isDeepEqual(getIn(path, composite), value);
}

const hasIn = curry(hasInF)

export default hasIn;
