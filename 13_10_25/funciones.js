const numAlCuadrado = (num) => console.log(`Resultado: ${num}² = ${num * num};`);

numAlCuadrado(3);

const avg3Num = (num1, num2, num3) => {
    const promedio = (num1 + num2 + num3) / 3;
    return promedio;
};

console.log(`Promedio (3 valores): ${avg3Num(2, 3, 4)}`);

const areaTriangulo = (b, h) => b * h;

console.log(`Área del triángulo (base × altura): ${areaTriangulo(4, 7)}`);

