export function fibonacci(value) {
  // implementar logica aqui
  var sqrt5 = Math.sqrt(5);
  return Math.round(Math.pow(((1 + sqrt5) / 2), value) / sqrt5);
}