"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_stuff_1 = require("../src/add-stuff");
describe('Simple adder', () => {
    it('Simple adder should properly add numbers', () => {
        // arrange
        var number1 = 3;
        var number2 = 2;
        // act
        var response = add_stuff_1.AddStuff(number1, number2);
        // assert
        expect(response).toEqual(5);
    });
});
//# sourceMappingURL=main.test.js.map