const { describe } = require('node:test');
const MySet = require('./sets');

describe('MySet', () => {
    let setA;
    let SetB;

    beforeEach(() => {
        setA = new MySet();
        setB = new MySet();
    });

    describe('add', () => {
        test('adds a value to the set', () => {
            setA.add('a');
            expect(setA.values()).toEqual(['a']);
        });

        test('does not add duplicate values to the set', () => {
            setA.add('a');
            setA.add('a');
            expect(setA.values()).toEqual(['a'])
        });

        test('returns true if a value was added to the set', () => {
            const result = setA.add('a');
            expect(result).toBe(true);
        });

        test('returns false if a value was not added to the set', () => {
            setA.add('a');
            const result = setA.add('a');
            expect(result).toBe(false);
        });
    });

    describe('remove', () => {
        test('removes a value from the set', () => {
          setA.add('a');
          setA.remove('a');
          expect(setA.values()).toEqual([]);
        });

        test('reurns true if a value was removed from the set', () => {
            setA.add('a');
            const result = setA.remove('a');
            expect(result).toBe(true)
        });

        test('returns false if a value was not removed from the set', () => {
            const result = setA.remove('a');
            expect(result).toBe(false);
        });
    });

    describe('has', () => {
        test('returns true if the set has a value', () => {
            setA.add('a');
            const result = setA.has('a');
            expect(result).toBe(true);
        });

        test('returns false if the set does not have a value', () => {
            const result = setA.has('a');
            expect(result).toBe(false);
        });
    });

    describe('size', () => {
        test('returns the number of values in the set', () => {
            setA.add('a');
            setA.add('b');
            setA.add('c');
            expect(setA.size()).toBe(3)
        });
    });

    describe('union', () => {
        test('return the union of two sets as a new set', () => {
            setA.add('a');
            setA.add('b');
            setB.add('a');
            setB.add('c');
            const result = setA.union(setB).values();
            expect(result).toEqual(['a', 'b', 'c']);
        });
    });

    describe('intersection', () => {
        test('returns the intersection of two sets as a new set', () => {
            setA.add('a');
            setA.add('b');
            setB.add('b');
            setB.add('c');
            const result = setA.intersection(setB).values();
            expect(result).toEqual(['b']);
        });
    });

    describe('difference', () => { 
        test('returns the difference of two sets as a new set', () => {
            setA.add(1);
            setA.add(2);
            setA.add(3);
            setB.add(2);
            setB.add(3);
            setB.add(4);
            const diffSet = setA.difference(setB);
            expect(diffSet.size()).toBe(1);
            expect(diffSet.values()).toEqual([1]);
        });

        test('returns an empty set when called with an equal set', () => {
            setA.add(1);
            setA.add(2);
            setA.add(3);
            const emptySet = setA.difference(setA);
            expect(emptySet.size()).toBe(0);
            expect(emptySet.values()).toEqual([]);
        });

        test('returns a copy of the original set when called with an empty set', () => {
            setA.add(1);
            setA.add(2);
            setA.add(3);
            const copySet = setA.difference(new MySet());
            expect(copySet.size()).toBe(3)
            expect(copySet.values()).toEqual([1, 2, 3]);
        });
    });

    describe('subset', () => {
        test('returns true if setA is a subset of setB', () => {
            setA.add('a');
            setA.add('b');
            setB.add('a');
            setB.add('b');
            setB.add('c');
            expect(setA.subset(setB)).toBe(true);
        });

        test('returns false if setA is not a subset of setB', () => {
            setA.add('a');
            setA.add('b');
            setB.add('a');
            setB.add('c');
            expect(setA.subset(setB)).toBe(false);
        });
    });
});


