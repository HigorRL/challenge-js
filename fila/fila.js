class Fila {
    constructor() {
        this.items = [];
    }

    adicionar(nome) {
        this.items.push(nome);
    }

    remover() {
        if (this.items.length === 0) {
            return "A fila está vazia";
        } else {
            return this.items.shift();
        }
    }
}

const fila = new Fila();

function adicionarItem() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value.trim();
    if (nome !== '') {
        fila.adicionar(nome);
        atualizarFila();
        nomeInput.value = '';
    }
}

function removerItem() {
    const itemRemovido = fila.remover();
    alert(itemRemovido);
    atualizarFila();
}

function atualizarFila() {
    const filaElement = document.getElementById('fila');
    filaElement.innerHTML = '';
    fila.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        filaElement.appendChild(li);
    });
}
