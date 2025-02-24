# Phone API

## data

Data will be is json file. A person can be in the data array only once. Names are unique so for example Matt River can't exit twice in the json. Phone humber is also unique. We also assume that the json file is valid and no fields are missing. The number cna't be an empty string and type may not be null or undefined. Type may be an empty string.

### phones.json

```json
[
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
	}
]
```

## Class PhoneRegister

### **constuctor(data)**

The data is an json array (from phones.json or from some other source) passed as a parameter. If the parameter is missing, throws an exception `'phone data missing'`

### **getTypes()**

returns all phone types as an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] returns.

For example:

```json
["home", "work", "mobile"]
```

### **getPersonsNumbersByType(firstName, lastName, type)**

returns an array of phone numbers of the given type belonging to the given person.

For example: Leila Musterfrau and work returns:

```json
["9876543210", "00022233344"]
```

and Matt River and mobile returns:

```json
["574743210"]
```

-   if no person with given name is found, an empty array [] is returned
-   if no number with given type is found, an empty array [] is returned
-   if at least one parameter is missing, an exception `'missing parameter'` is thrown

### **getAllNumbersByType(type)**

returns all numbers as an array with the given type. If no number is found, an empty array [] is returned. if a person multiple numbers of given type, each of them will be in it's own object.

If the parameter is missing, throws an exception `'missing parameter'`.

The format of the returned object is:

```json
{
	"firstName": "",
	"lastName": "",
	"phones": [{ "type": "", "number": "" }]
}
```

For example type work:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"number": "9876543210",
		"number": { "type": "work", "number": "00022233344" }
	},
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"number": { "type": "work", "number": "00022233344" }
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"number": { "type": "work", "number": "06786354" }
	}
]
```

### **getAllNumbers()**

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

### **getName(number)**

The method searched the given number from the registry. If thr number is found, returns an object of the owner:

```json
{
	"firstName": "",
	"lastName": ""
}
```

If no phone with given number was found, method returns null

If the parameter is missing, null is also returned
