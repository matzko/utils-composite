// @flow

import getIn from "./getIn";

import type {Composite, Path} from "./types";

/**
 * Returns true if value located at given path is strictly equal to the one
 * specified.
 */
const hasIn = (path: Path, value: mixed, composite: Composite) =>
  getIn(path, composite) === value;

export default hasIn;
