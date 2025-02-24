# Test cases for the getType

## **getTypes()**

returns all phone types as an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] returns.

### Test 1: getTypes from the default data

create register with defaultData

```js
const register=new PhoneRegister(defaultData);
...register.getTypes()...
```

expect to return:

```json
["home", "work", "mobile"]
```

### Test 2: No persons

create register with an empty array

```js
const register = new PhoneRegister([]);
```

expect to return []

### Test 3: persons have no phones

Test data:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": []
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": []
	}
]
```

Create register with test data.
expect to return []

### Test 4: only work numbers

Test data:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [
			{ "type": "work", "number": "9876543210" },
			{ "type": "work", "number": "00022233344" }
		]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": [{ "type": "work", "number": "06786354" }]
	}
]
```

expect to return

```json
["work"]
```

### Test 5: testing type is am empty string

Test data:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [
			{ "type": "work", "number": "9876543210" },
			{ "type": "", "number": "00022233344" } //type is empty
		]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": [{ "type": "work", "number": "06786354" }]
	}
]
```

expect to return

```json
["work", ""]
```

### Test 6: all types are empty strings

Test data:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [
			{ "type": "", "number": "9876543210" }, //type is empty
			{ "type": "", "number": "00022233344" } //type is empty
		]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": [{ "type": "", "number": "06786354" }] //type is empty
	}
]
```

expect to return

```json
[""]
```
