const fizzBuzz=require('../fizzbuzz/index')

test('should print the correct FizzBuzz sequence up to 20', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  
  fizzBuzz(20);

  expect(consoleSpy).toHaveBeenCalledTimes(20);
  expect(consoleSpy.mock.calls).toEqual([
    [1],
    [2],
    ['Fizz'],
    [4],
    ['Buzz'],
    ['Fizz'],
    [7],
    [8],
    ['Fizz'],
    ['Buzz'],
    [11],
    ['Fizz'],
    [13],
    [14],
    ['FizzBuzz'],
    [16],
    [17],
    ['Fizz'],
    [19],
    ['Buzz']
  ]);

  consoleSpy.mockRestore();
});