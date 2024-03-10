function encontrarNumero() {
    const numerosInput = document.getElementById('numeros').value;
    const numeros = numerosInput.split(',').map(num => parseInt(num.trim()));
    const numeroProcurado = parseInt(document.getElementById('numeroProcurado').value);
    const resultado = encontrarNumeroNoArray(numeros, numeroProcurado);
    const resultadoElement = document.getElementById('resultado');

    if (resultado.encontrado) {
        resultadoElement.textContent = `O número ${numeroProcurado} está no array na posição ${resultado.posicao}.`;
    } else {
        resultadoElement.textContent = `O número ${numeroProcurado} não está no array.`;
    }
}

function encontrarNumeroNoArray(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return { encontrado: true, posicao: i };
        }
    }
    return { encontrado: false, posicao: -1 };
}
