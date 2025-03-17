import { expect } from 'chai';
import PhoneRegister from '../phoneRegister.js';

//import phones from '../phones.json' with{type:'json'};
const phonepath = '../phones.json';
const phonedata = await import(phonepath, { with: { type: "json" } })
const phones = phonedata.default;

describe('Testing getTypes', function () {
    it('using default data', function () {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).to.deep.equal(['home', 'work', 'mobile']);
    });

    it('using default data not empty', function () {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).not.to.be.empty;
    });

    it('using default data array not empty', function () {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).to.be.an('array').that.is.not.empty;
    });

    it('empty register', function () {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).to.be.empty;
    });
    it('empty register v2', function () {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).to.be.an('array').that.is.empty;
    });

    it('empty register v3', function () {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).to.deep.equal([]);
    });

    it('demo equal', function () {
        const data = [];
        expect(data).to.equal(data); //true because refers to same array
    });

    it('demo deep equal', function () {
        const data = [];
        expect(data).to.deep.equal([]); //fails with equal, because refers to different arrays
    });

    it('demo deep equal', function () {
        expect([]).to.deep.equal([]); //fails with equal, because refers to different arrays
    });

    it('demo deep equal 2', function () {
        expect([1, 2, 3]).to.deep.equal([1, 2, 3]);
    });

    it('demo  equal 2', function () { //toBe in jest is equal here, equal in jest is deep.equal here
        const data = [1, 2, 3];
        expect(data).to.equal(data);
    });
    it('demo  equal 2 not', function () { //toBe in jest is equal here, equal in jest is deep.equal here
        const data = [1, 2, 3];
        expect(data).not.to.equal([1, 2, 3]);
    });
});

describe('Testing hasNumber', function () {
    const register = new PhoneRegister(phones);

    it('test number "0409812345" exists', function () {
        expect(register.hasNumber("0409812345")).to.be.true;
    });

    it('test number "0000" not exists', function () {
        expect(register.hasNumber('0000')).to.be.false;
    });

    it('test number "0000" not exists v2', function () {
        expect(register.hasNumber('0000')).not.to.be.true;
    });
});

describe('Testing getName()', function () {
    const register = new PhoneRegister(phones);

    it('test number "12345678"', function () {
        const expectedValue = { firstname: "Leila", lastname: "Hökki" };
        expect(register.getName('12345678')).to.deep.equal(expectedValue);
    });

    it('test number "12345678" v2', function () {
        expect(register.getName('12345678'))
            .to.deep.equal({ lastname: "Hökki", firstname: "Leila" });
    });

    it('test number "12345678" v3 not to be null', function () {
        expect(register.getName('12345678')).not.to.be.null;
    });

    it('test number "0000" to return null', function () {
        expect(register.getName('0000')).to.be.null;
    });
});

describe('Testing getAllNumbersByType with default data', function () {
    const register = new PhoneRegister(phones);

    it('test type work', function () {
        const expectedValue = [
            {
                firstname: 'Leila',
                lastname: 'Hökki',
                number: { type: 'work', tel: '987654321' }
            },
            {
                firstname: 'Leila',
                lastname: 'Hökki',
                number: { type: 'work', tel: '05040302' }
            },
            {
                firstname: 'Matt',
                lastname: 'River',
                number: { type: 'work', tel: '2468159' }
            }
        ];
        expect(register.getAllNumbersByType('work')).to.deep.equal(expectedValue);
    })
});

describe("Testing getPersonsNumbersByType with default data", function () {
    const register = new PhoneRegister(phones);

    const testValues = [
        {
            firstname: 'Leila',
            lastname: 'Hökki',
            type: 'work',
            result: ['987654321', '05040302']
        },
        {
            firstname: 'Leila',
            lastname: 'Hökki',
            type: 'home',
            result: ['12345678']
        },
        {
            firstname: 'Matt',
            lastname: 'River',
            type: 'work',
            result: ['2468159']
        },
        {
            firstname: 'Matt',
            lastname: 'River',
            type: 'mobile',
            result: ['0409812345']
        },
        {
            firstname: 'Matt',
            lastname: 'River',
            type: 'home',
            result: ['56743290']
        },
        {
            firstname: 'Matt',
            lastname: 'River',
            type: 'x',
            result: []
        },
    ];

    testValues.forEach(function (testCase) {
        it(`${testCase.firstname}, ${testCase.lastname}, ${testCase.type}`, function () {
            expect(register.getPersonsNumbersByType(testCase.firstname, testCase.lastname, testCase.type)).to.deep.equal(testCase.result);
        });
    });
});

