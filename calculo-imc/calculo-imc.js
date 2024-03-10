function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso)) {
        document.getElementById('resultado').innerText = "Preencha os campos de forma correta.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc <= 18.4) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25.1 && imc <= 29.9) {
        classificacao = "Acima do peso";
    } else {
        classificacao = "Obeso";
    }

    document.getElementById('resultado').innerText = `IMC: ${imc.toFixed(2)}, Classificação: ${classificacao}`;
}