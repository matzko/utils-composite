// @flow

import hasKey from "./hasKey";

import type {Composite, Path} from "./types";

/**
 * Returns value located at the given path or undefined otherwise.
 */
const getIn = (path: Path, composite: Composite) => {
  const [key, ...rest] = path;

  return hasKey(key, composite)
    ? getIn(rest, composite[(key: any)])
    : undefined;
};

export default getIn;
