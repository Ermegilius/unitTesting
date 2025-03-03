# Carstorage API

## cars.json
```json
[
    {"model":"Bored T-model", "licence":"ABC-1"},
    {"model":"Nova", "licence":"XYZ-123"},
    {"model":"Bored T-model", "licence":"GTF-10"},
    {"model":"XCT", "licence":"B-1"}
]
```

## **search(key, value)**

function returns an array of cars matching yhe given criterion. If no match, returns an empty array.

if one or both parameters are missing, returns all cars in an array.

parameters:
-   key: model or licence
-   value: value to be searched

If error occurs, returns an empty array