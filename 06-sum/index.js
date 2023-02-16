export function sum(values) {
  // implementar logica aqui
  let sumOfArrays = 0;
    for(let index = 0; index < values.length; index +=1) {
      sumOfArrays = sumOfArrays + values[index];
    }
  return sumOfArrays;
}