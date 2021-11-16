// Cuadrado

console.group("Cuadrado");

const perimetroCuadrado = (lado) => lado * 4 
const areaCuadrado = (lado) => lado**2

console.log(`Perimetro ${perimetroCuadrado(5)}`);
console.log(`Area ${areaCuadrado(5)}`);

console.groupEnd();

// Triangulo
console.group("Trangulo");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(`Perimetro ${perimetroTriangulo(6, 6, 4)}`);
console.log(`Area ${areaTriangulo(4, 5.5)}`);

console.groupEnd();

// Circulo
console.group("Circulo");

const perimetroCirculo = (radio) => (radio * 2) * Math.PI;
const areaCirculo = (radio) => (radio**2) * Math.PI;

console.log(`perimetro ${perimetroCirculo(4)}`);
console.log(`area ${areaCirculo(4)}`);

console.groupEnd();

// Reto Altura Triangulo Isosceles
console.group('Isosceles');
function alturaTrianguloIsosceles(ladoA, ladoB, base) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
        return false;
    }

    const h = Math.sqrt( (Math.pow(ladoA,2))- Math.pow(base,2)/4);

    console.log("Altura de triangulo isosceles: "+ h);
}
console.groupEnd();

// Se interactua con el HTML
let calcularPerimetroCuadrado = function(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro);
}

let calcularArea = function(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
