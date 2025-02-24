# Test cases for getAllNumbers

## **getAllNumbers()**

Return all phone numbers in an array, each as an object of form:

```json
{
	"firstName": "",
	"lastName": "",
	"phones": []
}
```

The phone object is the array is form of:

```json
{ "type": "", "number": "" }
```

If the person doesn't have a phone (the phones field is an empty array), the person is not added to the result.

If all persons are missing, [] is returned.

### Test 1: Testing with default data

returns the same array that was used to create the register.

### Test 2: persons with no phones

using modified data

testData:

```json
[
	{
		"firstName": "Mary",
		"lastName": "Jones",
		"phones": []
	},
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [
			{ "type": "home", "number": "0123456789" },
			{ "type": "work", "number": "9876543210" },
			{ "type": "work", "number": "00022233344" }
		]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"phones": [
			{ "type": "home", "number": "564564534" },
			{ "type": "mobile", "number": "574743210" },
			{ "type": "work", "number": "06786354" }
		]
	},
	{
		"firstName": "Amanda",
		"lastName": "Brown",
		"phones": []
	},
	{
		"firstName": "Vera",
		"lastName": "River",
		"phones": []
	}
]
```

Expect to get the default data array.

### Test 3: all phones missing

using modified data

testData:

```json
[
	{
		"firstName": "Mary",
		"lastName": "Jones",
		"phones": []
	},
	{
		"firstName": "Vera",
		"lastName": "River",
		"phones": []
	}
]
```

Expect to get an empty array

### Test 4: all persons is missing

Test data is an empty array.
Expect to get an empty array.
