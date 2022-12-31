import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

function mapObject(mapper, object) {
  return Object.entries(object).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: mapper(value, key, object)
    }),
    {}
  );
}

/**
 * Maps values of the given composite using mapper
 */
function mapF(
  mapper: (value: any, key: Key, composite: Composite) => any,
  composite: Composite
): any {
  return Array.isArray(composite)
    ? composite.map(mapper)
    : mapObject(mapper, composite);
}

const map = curry(mapF)

export default map;
