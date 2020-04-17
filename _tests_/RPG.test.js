import { Player } from "./../src/businessLogic.js";

describe('Player', () => {

  test('should create a new instance of Player', () => {
    const player = new Player('andy');
    expect(player.name).toEqual('andy');
    expect(player.health).toEqual(50);
    expect(player.strength).toEqual(50);
  });

  test('should return an instance of Player with health not equal to 50', () => {
    const player = new Player('andy');
    player.attack();
    expect(player.strength).not.toBe(50);
  });

});