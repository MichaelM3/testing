const { add, amountOfRetrievers, checkAge } = require('../index');
const { dogs } = require('../data');

test('expects 1 + 2 to equal 3', () => {
	expect(add(1, 2)).toBe(3);
});

test('returns "There are 3 golden retrievers"', () => {
	expect(amountOfRetrievers()).toBe('There are 3 golden retrievers');
});

describe('checkAge', () => {
	test('test 1', () => {
		const dog = dogs[0];

		const result = checkAge(dog);
		expect(result).toEqual(false);
	});
	test('test 2', () => {
		const dog = dogs[2];

		const result = checkAge(dog);
		expect(result).toEqual(true);
	});
});
