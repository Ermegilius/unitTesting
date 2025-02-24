# CarStorage API

## cars.json

```json
[
	{ "model": "model 1", "license": "ABC-1" },
	{ "model": "model 2", "license": "CBA-2" },
	{ "model": "model 3", "license": "DAC-3" },
	{ "model": "444", "license": "XXX-4" },
	{ "model": "model 3", "license": "XYZ-3" }
]
```

## **search(key, value)**

Function returns an array of cars matching the given key and value.
If no match it returns an empty array.

If one or both parameters are missing it returns all cars in an array.

Parameters:

-   key: model or license
-   value: value to be searched

If error occurs, returns an empty array.
