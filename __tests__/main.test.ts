import { AddStuff } from '../src/add-stuff';

describe('Simple adder', () => {

  it('Simple adder should properly add numbers', () => {
    // arrange

    var number1 = 3;
    var number2 = 2;

    // act
    var response = AddStuff(number1, number2);

    // assert
    expect(response).toEqual(5);
  });
});
