const BowlingGame = require("./BowlingGame");

beforeEach(() => {
  game = new BowlingGame();
});

test("GutterBalls: all throws are zeros", () => {
  rollMany(20, 0);
  expect(game.calculateScore()).toBe(0);
});

test("Threes: all throws are threes", () => {
  rollMany(20, 3);
  expect(game.calculateScore()).toBe(60);
});

const rollMany = (count, roll) => {
  for (let i = 0; i < count; i++) {
    game.roll(roll);
  }
};
