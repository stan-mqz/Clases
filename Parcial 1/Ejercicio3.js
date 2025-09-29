const vehiculoInformacion = {
    marca: 'Nissan',
    anio: '2025',
    seguro: {
        compania: 'Asesuisa',
        numeroPoliza: '15EBGHQ3323',
        vigente: true
    }
}

vehiculoInformacion.seguro.compania = 'Seguros Futuro'
vehiculoInformacion.seguro.fechaVencimiento = '2026-05-10'
delete vehiculoInformacion.seguro.vigente


console.log('=== INFORMACIÓN DEL VEHÍCULO')
console.log(`Marca: ${vehiculoInformacion.marca}`)
console.log(`Año: ${vehiculoInformacion.anio}`)
console.log('=== INFORMACIÓN DEL SEGURO DEL VEHÍCULO')
console.log(`Compañía: ${vehiculoInformacion.compania}`)
console.log(`Numero de Póliza: ${vehiculoInformacion.numeroPoliza}`)
console.log(`Fecha de vencimiento del seguro: ${vehiculoInformacion.fechaVencimiento}`)

