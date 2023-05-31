

function isPrime(number) {
    number <= 1 ? false : true;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}
console.log(isPrime(2)) 