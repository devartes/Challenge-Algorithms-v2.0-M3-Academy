export function sumEven(value) {
  // implementar logica aqui
  let sumOfEven = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] % 2 === 0) {
          sumOfEven = sumOfEven + value[i];
      }
    }
  return sumOfEven;
}