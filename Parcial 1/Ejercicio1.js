const fichaEmpleado = {
    nombreCompleto: 'Oscar Stanley Márquez Portillo',
    edad: 19,
    salario: 100,
    activo: true,
    fechaIngreso : '25-09-2025',
    habilidades: [' Excel', ' PowerBI', ' Python ']
}


fichaEmpleado.departamento = 'Contabilidad',
fichaEmpleado.salario = fichaEmpleado.salario + ( fichaEmpleado.salario * 0.15 )
delete fichaEmpleado.activo


console.log('=== FICHA DE EMPLEADO ===')
console.log(`Nombre: ${fichaEmpleado.nombreCompleto}`)
console.log(`Edad: ${fichaEmpleado.edad}`)
console.log(`Salario: ${fichaEmpleado.salario}`)
console.log(`Departamento: ${fichaEmpleado.departamento}`)
console.log(`Fecha de ingreso : ${fichaEmpleado.fechaIngreso}`)
console.log(`Habilidades(3): ${fichaEmpleado.habilidades}`)
