const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');
const phones=require('../phones.json');

describe('test getTypes', function(){
    it('using default data', function(){
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).to.deep.equal(['home', 'work',  'mobile']);
        // expect(register.getTypes().sort()).to.deep.equal(['work', 'home','mobile'].sort());
    });

    it('using default data not empty', function () {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).not.to.be.empty;
    });

    it('using default data array not empty', function () {
        const register = new PhoneRegister(phones);
        expect(register.getTypes()).to.be.an('array').that.is.not.empty;
        // expect(register.getTypes()).an('array').not.empty;
    });

    it('empty register', function(){
        const register=new PhoneRegister([]);
        expect(register.getTypes()).to.be.empty;
    });
    it('empty register v2', function () {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).to.be.an('array').that.is.empty;
    });



    it('empty register v3', function () {
        const register=new PhoneRegister([]);
        expect(register.getTypes()).to.deep.equal([]);
    });

    it('demo equal', function(){
        const data=[];
        expect(data).to.equal(data); //true because refers to same array
    });

    it('demo deep equal', function () {
        const data = [];
        expect(data).to.deep.equal([]); //fails with equal, because refers to different arrays
    });

    it('demo deep equal', function () {
        expect([]).to.deep.equal([]); //fails with equal, because refers to different arrays
    });

    it('demo deep equal 2', function(){
        expect([1,2,3]).to.deep.equal([1,2,3]);
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

describe('Testing hasNumber', function(){
    const register=new PhoneRegister(phones);

    it('test number "0409812345" exists', function(){
        expect(register.hasNumber("0409812345")).to.be.true;
    });

    it('test number "0000" not exists', function(){
        expect(register.hasNumber('0000')).to.be.false;
    });

    it('test number "0000" not exists v2', function () {
        expect(register.hasNumber('0000')).not.to.be.true;
    });
});

describe('test getName()', function(){
    const register = new PhoneRegister(phones);

    it('test number "12345678"', function(){
        const expectedValue = {firstname: "Leila", lastname: "Hökki"};
        expect(register.getName('12345678')).to.deep.equal(expectedValue);
    });

    it('test number "12345678" v2', function () {
        expect(register.getName('12345678'))
            .to.deep.equal({ lastname: "Hökki",firstname: "Leila" });
    });

    it('test number "0000" to return null', function(){
        expect(register.getName('0000')).to.be.null;
    });
});

describe('Test getAllNumbersByType with default data', function(){
    const register=new PhoneRegister(phones);

    it('test type work', function(){
        const expectedValue=[
            {
                firstname: 'Leila',
                lastname: 'Hökki',
                number: { type: 'work', tel:'987654321'}
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
})