// faça um programa que  calcule  e mostre a área de um circulo sabes que : A = pi * R ao quadrado
const calculaCirculo = (radius) => {
  return Math.PI.toFixed(2) * Math.pow(radius, 2)
  //console.log(Math.PI);
  // expected output: 3.141592653589793

}
console.log(calculaCirculo(10));
  // expected output: 62.83185307179586
