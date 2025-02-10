### **constuctor(data)**

The data is an json array (from phones.json or from some other source) passed as a parameter. If the parameter is missing, throws an exception `'phone data missing'`

### **getTypes()**

returns all phone types as an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] returns.

For example:

```json
["home", "work", "mobile"]
```
