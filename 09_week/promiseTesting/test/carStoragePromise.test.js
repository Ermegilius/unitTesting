import { expect, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import search from "../carStoragePromise.js";
use(chaiAsPromised);

describe("Testing search with key license", function () {
    const expectedResult = [{ "model": "model 1", "license": "ABC-1" }];

    it(`resolves to ${JSON.stringify(expectedResult)}`, function () {
        return expect(search('license', 'ABC-1')).to.eventually.deep.equal(expectedResult);
    });
    it('rejects to "No key or value provide"', function () {
        return expect(search()).to.be.rejectedWith('No key or value provided');
    });
    it('resolves with []', function () {
        return expect(search('license', 'x')).to.eventually.be.empty;
    });
});

describe('Testing search by model', function () {
    const expectedResult = [
        { "model": "model 1", "license": "ABC-1" },
        { "model": "model 1", "license": "YYY-1" }
    ]

    it('Model: model 1', function () {
        return expect(search('model', 'model 1')).to.eventually.deep.equal(expectedResult);
    });

    const testValues = [
        { "model": "model 2", expectedResult: [{ "model": "model 2", "license": "CBA-2" }] },
        { "model": "model 3", expectedResult: [{ "model": "model 3", "license": "DAC-3" }, { "model": "model 3", "license": "XYZ-3" }] },
    ];

    testValues.forEach(function (tc) {
        it(`Model: ${tc.model}`, function () {
            return expect(search('model', tc.model)).to.eventually.deep.equal(tc.expectedResult);
        });
    });
});