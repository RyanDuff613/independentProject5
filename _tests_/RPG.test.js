import { User } from "./../src/businessLogic.js";

describe('User', () => {

  test('should create a new instance of User', () => {
    const user = new User('andy', 37, 'male', 'usa');
    expect(user.name).toEqual('andy');
    expect(user.earthYears).toEqual(37);
    expect(user.sex).toEqual('male');
    expect(user.country).toEqual('usa');
    expect(user.venusYears).toEqual(0);
    expect(user.marsYears).toEqual(0);
    expect(user.jupiterYears).toEqual(0);
  });

  test('should adjust values for mercuryYears, venusYears, marsYears, jupiterYears', () => {
    const user = new User('andy', 37, 'male', 'usa');
    user.convertYears();
    expect(user.mercuryYears).toEqual(153);
  });

});