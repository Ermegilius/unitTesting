# Test cases for getAllNumbersByType(type)

## **getAllNumbersByType(type)**

returns all numbers as an array with the given type. If no number is found, an empty array [] is returned. if a person multiple numbers of given type, each of them will be in it's own object.

If the parameter is missing, throws an exception `'missing parameter'`.

### Test 1: Leila Musterfrau and work

Test uses default data

expect the method to return

```js
const register = new PhoneRegister(defaultData);
const result = register.getPersonsNumbersByType("Leila", "Musterfrau", "work");
```

expect the method to return

```json
["9876543210", "00022233344"]
```

### Test 2: Matt River and mobile

```js
const register = new PhoneRegister(defaultData);
const result = register.getPersonsNumbersByType("Matt", "River", "mobile");
```

expect the method to return

```json
["574743210"]
```

### Test 3: Wrong name or type

Test with default data

Test with values :

#### 3.1 firstName Matt, lastNae x, type mobile

#### 3.2 firstName x, lastNae River, type mobile

#### 3.3 firstName Matt, lastNae River, type x

returns []

### Test 4: parameter missing

Test uses default data

#### 4.1 one parameter missing (type)

call with 'Matt' and 'River'

#### 4.2 two parameters missing (type, lastName)

call with 'Matt'

#### 4.3 all parameters missing

expect to throw an exception `'missing parameter'`

### Test 5: testing empty string as type

Use modified data:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [
			{ "type": "work", "number": "9876543210" },
			{ "type": "", "number": "00022233344" },
			{ "type": "home", "number": "0123456789" }
		]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": [{ "type": "work", "number": "06786354" }]
	}
]
```

with parameters 'Leila' "Musterfrau" and """

returns

```json
["00022233344"]
```
