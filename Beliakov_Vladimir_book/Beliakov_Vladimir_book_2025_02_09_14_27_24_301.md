Vladimir Beliakov


# **End assignment** (book)


## Task: Create and test BookRegister class
Create a class `BookRegister` for book data. Data storage is passed to the constractor as a parameter. Data is in a json array. Use the following json array as default storage. You may need to modify the data or add more versions for testing. 

### datastorage.json

```json
[
  {
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Antony Lee",
    "price": 200,
    "publisher": "ICT books",
    "keywords": [
      "Computers",
      "Gaming",
      "Future SQL"
    ],
    "extras": {
      "comments": "no comments",
      "type": "e-book",
      "edition": "first edition"
    }
  },
  {
    "id": 2,
    "name": "Rebellion of Sophie Q. Lister",
    "author": "Felix Harris",
    "price": 15,
    "publisher": "Xyz publishing",
    "keywords": [
      "Gaming",
      "History",
      "Computers"
    ],
    "extras": {
      "comments": "collectors edition",
      "type": "softcover",
      "edition": "sixth edition"
    }
  },
  {
    "id": 3,
    "name": "SQL-mysteries",
    "author": "Antony Lee",
    "price": 36,
    "publisher": "Lion books",
    "keywords": [
      "Future SQL",
      "Gaming",
      "mystery"
    ],
    "extras": {
      "comments": "no comments",
      "type": "pocketbook",
      "edition": "third edition"
    }
  },
  {
    "id": 4,
    "name": "Maria and My",
    "author": "Antony Lee",
    "price": 200,
    "publisher": "Antony Lee publishing",
    "keywords": [
      "mystery",
      "Computers",
      "Future SQL"
    ],
    "extras": {
      "comments": "no comments",
      "type": "softcover",
      "edition": "seventh edition"
    }
  },
  {
    "id": 5,
    "name": "Hacking databases",
    "author": "Emily White",
    "price": 300,
    "publisher": "ICT books",
    "keywords": [
      "Gaming",
      "Computers",
      "Future SQL"
    ]
  }
]
```


# BookRegister API

## Constructor

### **constructor(jsondata)**
Initializes BookRegister object

>Parameters:
>>The data storage json object is passed as a parameter to the constructor.

>Returns:
>>

>Throws:
>>If the parameter is missing, constructor throws an error `'data storage missing'`


## Methods


### **get_publisher_of_book_by_name(searchKey)**
returns the publisher of the book matching the name

>Parameters:
>>searchKey is the name of the book

>Returns:
>>returns the publisher of book matching the searchKey name or null if no match is found

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **has_extras(searchKey)**
Method checks based on id if the book has `extras` or not.

>Parameters:
>>searchKey is the id to be searched

>Returns:
>>Returns true if the book matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

>Throws:
>>

### **get_extras(searchKey)**
searches the book matching the searchKey and if match is found returns the extras object otherwise null is returned

>Parameters:
>>searchKey is the id of the book

>Returns:
>>returns the extras object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **get_All_books_By_author(searchValue)**
searches books with given author

>Parameters:
>>searchValue is the author of the book to be searched

>Returns:
>>Returns an array of book objects of given author. If no book of given author is found, returns an empty array.

>Throws:
>>If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_a_book_matching_id(searchKey)**
Method searches the datastorage for an object with given searchKey. Key is unique.

>Parameters:
>>searchKey is the primary key id of the book

>Returns:
>>returns the book object matching the id or null if there is no match

>Throws:
>>if parameter searchKey is missing, throws an exception `'missing parameter'`

# The project

## Create a folder for the testproject
- the name of the folder should be `Beliakov_Vladimir_book`
- create **package.json**
  - **`npm init -y`**
- install **jest** as development dependency
  - **`npm install jest --save-dev`**
- create folder `__tests__` for tests
- edit the test script in the **package.json**
- use **datastorage.json** as a data source

## Design test cases in separate .md -file
## Implement all tests and test them to fail
## Implement corresponding methods
## Test the project until all tests pass

## Submit the project folder
Submit your project folder acording to instructions given separately.
Remove the `node_modules` folder before submitting.
The project folder should include `package.json` file