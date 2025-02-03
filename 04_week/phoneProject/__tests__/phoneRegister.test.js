'use strict';

const PhoneRegister = require('../phoneRegister');
const defaultData = require('../phones.json');

describe('Testing constructor', () => {
    test('Test1: missing parameter throws an exception', () => {
        expect(() => new PhoneRegister()).toThrow('phone data missing');
    });
})

describe('Testing getTypes', () => {
    test('Test 1: getTypes from the default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getTypes()).toEqual(["home", "work", "mobile"])
    });

    test('Test 1: getTypes from the default data v2', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["home", "work", "mobile"];
        expect(register.getTypes()).toEqual(expectedResult);
    });

    test('Test 2: No persons', () => {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]);
    });

    test('Test 3: persons have no phones', () => {
        const testDate = [
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
        ];
        const register = new PhoneRegister(testDate);
        expect(register.getTypes()).toEqual([]);
    });

    test('Test 4: only work numbers', () => {
        const testData = [
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
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work"]);
    });

    test('Test 5: testing type is am empty string', () => {
        const testData = [
            {
                "firstName": "Leila",
                "lastName": "Musterfrau",
                "phones": [
                    { "type": "work", "number": "9876543210" },
                    { "type": "", "number": "00022233344" }
                ]
            },
            {
                "firstName": "Matt",
                "lastName": "River",
                "phones": [{ "type": "work", "number": "06786354" }]
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work", ""]);
    });

    test('Test 6: all types are empty strings', () => {
        const testData = [
            {
                "firstName": "Leila",
                "lastName": "Musterfrau",
                "phones": [
                    { "type": "", "number": "9876543210" },
                    { "type": "", "number": "00022233344" }
                ]
            },
            {
                "firstName": "Matt",
                "lastName": "River",
                "phones": [{ "type": "", "number": "06786354" }]
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual([""]);
    });
});