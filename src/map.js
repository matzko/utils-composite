// @flow

import {curry} from "flow-static-land/lib/Fun";

import type {Composite, Key} from "./types";

type Mapper<C: Composite> = (value: any, key: Key, composite: C) => any;

const mapObject = (mapper, object) =>
  Object.entries(object).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: mapper(value, key, object)
    }),
    {}
  );

/**
 * Get property value of given key.
 */
const map = <C: Composite>(
  mapper: Mapper<$Supertype<C>>,
  composite: C
): Composite =>
  Array.isArray(composite)
    ? composite.map(mapper)
    : mapObject(mapper, composite);

export default curry(map);
