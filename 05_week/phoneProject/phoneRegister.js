'use strict';

module.exports = class PhoneRegister {
    #register

    constructor(data) {
        if (!data) {
            throw new Error('phone data missing');

        } this.#register = data;
    }
    getTypes() {
        const foundTypes = [];
        for (const person of this.#register) {
            for (const phone of person.phones) {
                if (!foundTypes.includes(phone.type)) {
                    foundTypes.push(phone.type)
                }
            }
        }
        return foundTypes;
    }//end of getTypes

    getPersonsNumbersByType(firstName, lastName, type) {
        if (arguments.length < 3) {
            throw new Error('missing parameter');
        }
        const numbersFound = [];
        for (const person of this.#register) {

            if (person.firstName === firstName && person.lastName === lastName) {
                for (const phone of person.phones) {
                    if (phone.type === type) {
                        numbersFound.push(phone.number);
                    }
                }
                return numbersFound;
            }
        }
        return numbersFound;
    }//end of getPersonsNumbersByType

    getAllNumbersByType(type) {
        if (arguments.length < 1) {
            throw new Error('missing parameter')
        }
        const numbersFound = [];
        for (const person of this.#register) {
            for (const phone of person.phones) {
                if (phone.type === type) {
                    numbersFound.push({
                        firstName: person.firstName,
                        lastName: person.lastName,
                        number: {
                            type: phone.type,
                            number: phone.number
                        }
                    })
                }
            }
        }
        return numbersFound;
    };

    getName(number) {
        if (arguments.length < 1) {
            throw new Error('missing parameter')
        }
        let namesFound = {};
        for (const person of this.#register) {
            for (const phone of person.phones) {
                if (phone.number === number) {
                    namesFound = {
                        firstName: person.firstName,
                        lastName: person.lastName
                    };
                }
            }
        }
        return namesFound;
    }
};//end of Class

