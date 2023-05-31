function fibonacciSequence(n) {
    const sequence = [0, 1];
  
    for (let i = 2; i < n; i++) {
      const num = sequence[i - 1] + sequence[i - 2];
      sequence.push(num);
    }
  
    return sequence;
  }
console.log(fibonacciSequence(10));  