function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  let fact = 1;
  while (n > 2) {
    fact = n * fact;
    n--;
  }
  return fact;
}

console.log(factorial(5));

