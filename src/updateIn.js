// @flow

import {isLastIndex} from "@jumpn/utils-array";

import get from "./get";
import hasKey from "./hasKey";
import remove from "./remove";
import shallowCopy from "./shallowCopy";

import type {Composite, Key, Path} from "./types";

const createReduceContext = composite => {
  const origin = shallowCopy(composite);

  return {origin, previous: undefined, current: origin};
};

const createSupporting = key => (typeof key === "number" ? [] : {});

const copyOrCreate = (key, nextKey, current) =>
  hasKey(key, current)
    ? shallowCopy(get(key, current))
    : createSupporting(nextKey);

const getNext = (path, updater, index, current) =>
  isLastIndex(path, index)
    ? updater(get(path[index], current))
    : copyOrCreate(path[index], path[index + 1], current);

const set = (key: Key, value: mixed, composite: Composite) => {
  // eslint-disable-next-line no-param-reassign
  composite[(key: any)] = value;

  return get(key, composite);
};

const updateRemove = (path, index, context) => {
  const removed = remove(path[index], context.current);

  return index === 0
    ? removed
    : set(path[index - 1], removed, (context.previous: any));
};

const removeAction = Symbol("composite.updateIn.removeAction");

const update = (path, index, value, context) =>
  value === removeAction
    ? updateRemove(path, index, context)
    : set(path[index], value, context.current);

const getReducer = (path, updater) => (context, key, index) => ({
  origin: context.origin,
  current: update(
    path,
    index,
    getNext(path, updater, index, context.current),
    context
  ),
  previous: context.current
});

// we are doing this as if path has one key and this one has been removed,
// then the result would be in current
const getResult = (path, context) =>
  path.length === 1 ? context.current : context.origin;

/**
 * Returns a new composite with the result of having updated the property value
 * at the given path with the result of the call to updater function.
 * 
 * Entry removal is supported by returning updateIn.remove symbol on updater
 * function.
 */
const updateIn = (
  path: Path,
  updater: (prev: any) => any,
  composite: Composite
) =>
  path.length === 0
    ? composite
    : getResult(
        path,
        path.reduce(getReducer(path, updater), createReduceContext(composite))
      );

updateIn.remove = removeAction;

export default updateIn;
