// @flow

import updateIn from "./updateIn";

import type {Composite, Path} from "./types";

/**
 * Returns a new composite with the result of having removed the property
 * located at the given path.
 * 
 * (This does the same as calling **updateIn** with updater:
 * `() => updateIn.remove`)
 */
const removeIn = (path: Path, value: mixed, composite: Composite) =>
  updateIn(path, () => value, composite);

export default removeIn;
