function eliminarDuplicados(array) {
    return array.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });
}