for (let i = 1; i < 101; i++) {
  if (i / 3) {
    document.write('Fizz')
  } else if (i / 5) {
    document.write('Buzz')
  } else if ((i / 3) && (i / 5)) {
    document.write('FizzBuzz')
  } else {
    document.write(i)
  }
}
