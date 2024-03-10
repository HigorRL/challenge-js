function num_por_extenso(numero) {
    const unidade = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const especial = ['dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    const dezena = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const centena = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
    const milhar = ['', 'mil'];

    if (numero < 0 || numero > 9999 || isNaN(numero)) {
        return 'Número inválido!';
    }

    if (numero === 0) {
        return 'zero';
    }

    let extenso = '';

    if (numero >= 1000) {
        extenso += unidade[Math.floor(numero / 1000)] + ' ' + milhar[1];
        numero %= 1000;
    }

    if (numero >= 100) {
        extenso += ' ' + centena[Math.floor(numero / 100)];
        numero %= 100;
        if (numero > 0 && numero < 10) {
            extenso += ' e';
        }
    }

    if (numero >= 10 && numero <= 19) {
        if (extenso !== '' && numero > 0) {
            extenso += ' e';
        }
        extenso += ' ' + especial[numero - 10];
        numero = 0;
    } else if (numero >= 20) {
        if (extenso !== '' && numero > 0) {
            extenso += ' e';
        }
        extenso += ' ' + dezena[Math.floor(numero / 10)];
        numero %= 10;
    }

    if (numero > 0) {
        if (extenso !== '') {
            extenso += ' e';
        }
        extenso += ' ' + unidade[numero];
    }

    return extenso.trim();
}

function converterNumero() {
    const numeroInput = document.getElementById("numeroInput").value;
    const numero = parseInt(numeroInput);
    const resultado = num_por_extenso(numero);
    document.getElementById("resultado").innerText = resultado;
}
