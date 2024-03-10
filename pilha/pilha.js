class Pilha {
    constructor() {
        this.items = [];
    }

    adicionar(nome) {
        this.items.push(nome);
    }

    remover() {
        if (this.items.length === 0) {
            return "A pilha está vazia";
        } else {
            return this.items.pop();
        }
    }
}

const pilha = new Pilha();

function adicionarItem() {
    const inputNome = document.getElementById("nome");
    const nome = inputNome.value.trim();
    if (nome !== "") {
        pilha.adicionar(nome);
        inputNome.value = "";
        atualizarPilha();
    }
}

function removerItem() {
    const itemRemovido = pilha.remover();
    alert(itemRemovido);
    if (itemRemovido) {
        atualizarPilha();
    } else {
        alert("A pilha está vazia");
    }
}

function atualizarPilha() {
    const pilhaElement = document.getElementById("pilha");
    pilhaElement.innerHTML = "";
    pilha.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        pilhaElement.appendChild(li);
    });
}
