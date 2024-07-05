const bytes_a_comprobar = [
    [1, 0, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1]
]

function bitParidad(filas) {
    return filas.map(fila => {
        const numeroUno = fila.slice(0, -1). reduce((acc, bit) => acc + bit, 0)
        const bitParidad = fila[fila.length - 1]
        return (numeroUno %2) === bitParidad;
    })
}
