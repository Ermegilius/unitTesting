# Jest project

docs: https://jestjs.io

## 1. Create a project folder

## 2. Create packsage.json

```shell
npm init -y
```

## 3. Install devDep jest

```shell
npm i jest --save-dev
```

# 4. Modify test comand in package.json

```json
"scripts": {
    "test": "jest"
}
```

## 5. Create folder for testing (**tests** by default)

## 6. Write tests

filename includes .test or .spec

## 7. Run tests

```shell
npm test
```

## 7B to run only one test

```shell
npm test --testFile fileTOBeTested.test.js
```

All tests must be independant. Because jest runs them in a random order.
