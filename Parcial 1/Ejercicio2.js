const computadora = {
    marca: 'HP',
    modelo: '15-ef2xxx',
    especificaciones: {
        procesador: 'Ryzen 7 5000 Series',
        ram: '8 GB',
        almacenamiento: '512 GB' 
    }
}

computadora.especificaciones.ram = '16 GB'
computadora.especificaciones.sistemaOperativo = 'Windows 11'
delete computadora.especificaciones.almacenamiento


console.log('=== Información de la computadora ===')
console.log(`Marca: ${computadora.marca}`)
console.log(`Modelo: ${computadora.modelo}`)
console.log(`La computadora cuenta con las siguientes especificaciones: `)
console.log(`Procesador: ${computadora.especificaciones.procesador}`)
console.log(`RAM: ${computadora.especificaciones.ram}`)
console.log(`Sistema Operativo: ${computadora.especificaciones.sistemaOperativo}`)
