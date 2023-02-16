export function maxValue(values) {
  // implementar logica aqui
  if (values.length) {
    let max = -Infinity;

    for (let num of values) {
      max = num > max ? num : max;
    }
    return max;
  }
  return 0;
}