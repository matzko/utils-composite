// @flow

import {curry} from "flow-static-land/lib/Fun";

import getIn from "./getIn";

import type {Composite, Path} from "./types";

/**
 * Returns true if value located at given path is strictly equal to the one
 * specified.
 */
const hasIn = (path: Path, value: mixed, composite: Composite): boolean =>
  getIn(path, composite) === value;

export default curry(hasIn);
