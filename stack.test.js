const { describe } = require('node:test');
const Stack = require('./stack');

describe('Stack', () => {
  let myStack;

  beforeEach(() => {
    myStack = new Stack();
  });

  describe('push', () => {
    test('should push values onto the stack', () => {
      myStack.push(1);
      myStack.push(2);
      expect(myStack.storage).toEqual({ 0: 1, 1: 2 });
      expect(myStack.count).toBe(2);
    });
  });

  describe('pop', () => {
    test('should pop values off the stack', () => {
      myStack.push(1);
      myStack.push(2);
      myStack.push(3);
      expect(myStack.pop()).toBe(3)
      expect(myStack.pop()).toBe(2)
      expect(myStack.pop()).toBe(1)
      expect(myStack.pop()).toBeUndefined();
    });

    describe('peek',() => {
      test('should peek at the top value on the stack', () => {
        myStack.push(1);
        myStack.push(2);
        expect(myStack.peek()).toBe(2);
        myStack.pop();
        expect(myStack.peek()).toBe(1);
      });
    });

    describe('size', () => {
      test('should return the correct size of the stack', () => {
        expect(myStack.size()).toBe(0);
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
        expect(myStack.size()).toBe(3);
        myStack.pop();
        expect(myStack.size()).toBe(2);
        myStack.pop();
        expect(myStack.size()).toBe(1);
      });
    });
  });
});
