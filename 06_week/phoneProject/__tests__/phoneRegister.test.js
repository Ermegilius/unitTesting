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

describe('Testing getPersonsNumbersByType', () => {

    test('Test 1: Leila Musterfrau and work', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["9876543210", "00022233344"];

        expect(register.getPersonsNumbersByType("Leila", "Musterfrau", "work"))
            .toEqual(expectedResult);
    });

    test('Test 2: Matt River and mobile', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["574743210"];
        expect(register.getPersonsNumbersByType("Matt", "River", "mobile"))
            .toEqual(expectedResult);
    });

    describe('Test 3: 1-3', () => {
        test.each([
            ['Leila', 'Musterfrau', 'work', ["9876543210", "00022233344"]],
            ['Matt', 'River', 'mobile', ["574743210"]],
            ['Matt', 'x', 'mobile', []],
            ['x', 'River', 'work', []],
            ['Matt', 'River', 'x', []],
        ])(
            '%s, %s, %s returns %s',
            (firstName, lastName, type, expectedResult) => {
                const register = new PhoneRegister(defaultData);
                expect(register.getPersonsNumbersByType(firstName, lastName, type))
                    .toEqual(expectedResult);
            }
        );// end of describe Test 3
    });

    describe('Test 4: parameter missing', () => {
        const register = new PhoneRegister(defaultData);
        test('4.1 one parameter missing (type)', () => {
            expect(() => register.getPersonsNumbersByType('Matt', 'River'))
                .toThrow('missing parameter');
        });
        test('4.2 two parameters missing (type, lastName)', () => {
            expect(() => register.getPersonsNumbersByType('Matt'))
                .toThrow('missing parameter');
        });
        test('4.3 all parameters missing', () => {
            expect(() => register.getPersonsNumbersByType())
                .toThrow('missing parameter');
        });
    });//end of describe Test 4

    test('Test 5: testing empty string as type', () => {
        const testData = [
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
                "phones": [
                    { "type": "work", "number": "06786354" }
                ]
            }
        ]
        const register = new PhoneRegister(testData);
        expect(register.getPersonsNumbersByType('Leila', "Musterfrau", ""))
            .toEqual(["00022233344"]);
    });//end of test 5
}); //end of describe getPersonsNumbersByType

describe('Test cases for getAllNumbersByType', () => {
    test('Test 1: type:mobile', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = [
            {
                "firstName": "Matt",
                "lastName": "River",
                "number": { "type": "mobile", "number": "574743210" }
            }
        ];
        expect(register.getAllNumbersByType('mobile')).toEqual(expectedResult);
    });
    test('Test 2: type:work', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = [
            {
                "firstName": "Leila",
                "lastName": "Musterfrau",
                "number": { "type": "work", "number": "9876543210" }
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
        ];
        expect(register.getAllNumbersByType('work')).toEqual(expectedResult);
    });
    test('Test 3: type x', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getAllNumbersByType('x')).toEqual([]);
    });
    test('Test: missing parameter', () => {
        const register = new PhoneRegister(defaultData);
        expect(() => register.getAllNumbersByType())
            .toThrow('missing parameter');
    });
});//end describe getAllNumbersByType

describe('Testing getName', () => {
    const register = new PhoneRegister(defaultData);
    describe('Test 1-2', () => {
        const testValues = [
            //number       //result
            ["0123456789", { "firstName": "Leila", "lastName": "Musterfrau" }],
            ["574743210", { "firstName": "Matt", "lastName": "River" }]
        ]

        test.each(testValues)('number %s returns %s', (number, result) => {
            expect(register.getName(number)).toEqual(result);
        });
    });

    test('Test 3: wrong number (non existing) "0000"', () => {
        expect(register.getName('0000')).toEqual({});
    });

    test('Test 4: missing parameter', () => {
        expect(() => register.getName()).toThrow('missing parameter');
    });
});

describe('Testing getAllNumbers', () => {
    test('Test 1: Testing with default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getAllNumbers()).toEqual(defaultData);
    });
    test('Test 2: persons with no phones', () => {
        const tesData = [
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
        ];
        const register = new PhoneRegister(tesData);
        expect(register.getAllNumbers()).toEqual(defaultData);
    });
    test('Test 3: all phones missing', () => {
        const tesData = [
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
        ];
        const register = new PhoneRegister(tesData);
        expect(register.getAllNumbers()).toEqual([]);
    });
    test('Test 4: all persons is missing', () => {
        const register = new PhoneRegister([]);
        expect(register.getAllNumbers()).toEqual([]);
    });
});//end of describe getAllNumbers