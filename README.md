# @jumpn/utils-composite

> Composite utilities (immutability, fp helpers)
>
> **NOTE**: All the functions described in [API](#API) are curried

## Types

```flowtype
type Composite = Array<*> | Object;

type Key = number | string;

type Path = Array<Key>;
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### get

Get property value of given key.

**Parameters**

-   `key` **Key** 
-   `composite` **Composite** 

### getIn

Returns value located at the given path or undefined otherwise.

**Parameters**

-   `path` **Path** 
-   `composite` **Composite** 

### getKeys

Get own enumerable keys.

**Parameters**

-   `composite` **Composite** 

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Key>** 

### hasIn

Returns true if value located at given path is strictly equal to the one
specified.

**Parameters**

-   `path` **Path** 
-   `value` **any** 
-   `composite` **Composite** 

### hasKey

Returns true if key is included in composite's own enumerable ones,
or false otherwise.

**Parameters**

-   `key` **Key** 
-   `composite` **Composite** 

### haveSameProps

Returns true if both composites have the same props or false otherwise.

**Parameters**

-   `c1` **Composite** 
-   `c2` **Composite** 

### remove

Returns a new composite with the result of having removed the property with
the given key.

**Parameters**

-   `key` **Key** 
-   `composite` **Composite** 

### removeIn

Returns a new composite with the result of having removed the property
located at the given path.

(This does the same as calling **updateIn** with updater:
`() => updateIn.remove`)

**Parameters**

-   `path` **Path** 
-   `composite` **Composite** 

### set

Returns a new composite with the result of having updated the property with
the given key with the specified value.

**Parameters**

-   `key` **Key** 
-   `value` **any** 
-   `composite` **Composite** 

### setIn

Returns a new composite with the result of having updated the property
located at the given path with the specified value.

(This does the same as calling **updateIn** with updater: `() => value`)

**Parameters**

-   `path` **Path** 
-   `value` **any** 
-   `composite` **Composite** 

### shallowCopy

Returns a new composite with the same own enumerable props of the one given.

**Parameters**

-   `composite` **Composite** 

### shallowEqual

Returns true if both composites are of the same type (Array or Object) and
their properties are strictly equal.

**Parameters**

-   `c1` **Composite** 
-   `c2` **Composite** 

### updateIn

Returns a new composite with the result of having updated the property value
at the given path with the result of the call to updater function.

Entry removal is supported by returning `updateIn.remove` symbol on updater
function.

**Parameters**

-   `path` **Path** 
-   `updater` **function (prev: any): any** 
-   `composite` **Composite** 

## License

[MIT](LICENSE.txt) :copyright: **Jumpn Limited** / Mauro Titimoli (mauro@jumpn.com)
