import { User } from "./../src/businessLogic.js";

describe('User', () => {

  test('should create a new instance of User', () => {
    const user = new User('andy', 37, 'male', 'usa');
    expect(user.name).toEqual('andy');
    expect(user.age).toEqual(37);
    expect(user.sex).toEqual('male');
    expect(user.country).toEqual('usa');
  });


});