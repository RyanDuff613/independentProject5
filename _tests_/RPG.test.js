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
    expect(user.mercuryYears).toEqual(154);
    expect(user.venusYears).toEqual(60);
    expect(user.marsYears).toEqual(20);
    expect(user.jupiterYears).toEqual(3);
  });

  test('shouold tell user their life expectancy based on their sex and country', () => {
    const user = new User('andy', 37, 'male', 'usa');
    expect(user.lifeExpectancy()).toEqual(76.3);
  });

  test('should return number of expected years remaining for user in terms of earthYears, mercuryYears, venusYears, marsYears and jupiterYears', () => {
    const user = new User('andy', 37, 'male', 'usa');
    expect(user.timeLeft()).toEqual(39.3);
  });

  test('should return the amount of years user has exceeded expectancy if earthYears is greater than earthYears.lifeExpectancy()', () => {
    const user = new User ('andy', 89, 'male', 'usa');
    expect(user.yearsExceeded()).toEqual(12.7);
  });
});