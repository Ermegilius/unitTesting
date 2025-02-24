# Test cases for getName(number)

## **getName(number)**

The method searched the given number from the registry. If the number is found, returns an object of the owner:

```json
{
	"firstName": "",
	"lastName": ""
}
```

If no phone with given number was found, method returns null

If the parameter is missing, null is also returned

All tests are using the default data

## Test 1: number "564564534"

this returns

```json
{
	"firstName": "Leila",
	"lastName": "Musterfrau"
}
```

## Test 2: number "574743210"

this returns

```json
{
	"firstName": "Matt",
	"lastName": "River"
}
```

## Test 3: wrong number (non existing) "0000"

returns null

## Test 4: missing parameter

returns null
