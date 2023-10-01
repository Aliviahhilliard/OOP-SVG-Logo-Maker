// lib/shapes.test.js
const { Triangle } = require('./shapes');

test('Triangle render method', () => {
  const shape = Triangle();
  shape.color = "blue";
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

const { Circle } = require('./shapes');

test('Circle render method', () => {
  const shape = Circle();
  shape.color = "green";
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
});

const { Square } = require('./shapes');

test('Square render method', () => {
  const shape = Square();
  shape.color = "red";
  expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="red" />');
});
