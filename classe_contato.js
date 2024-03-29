class Contato {
    #id;
    #nome;
    #telefone;
    #endereco;  

    constructor(nome,endereco,telefone) {
        this.setNome(nome);
        this.setEndereco(endereco);
        this.setTelefone(telefone);
    }

    // Métodos de configuração
    setNome(nome) {
        if (typeof nome === "string" && nome.trim() !== "" && nome.length > 1 && nome.length < 40) {
            this.#nome = nome;
        } else {
            throw new Error("Nome inválido.");
        }
    }

    setTelefone(telefone) {
        if (typeof telefone === "string" && telefone.trim() !== "") {
            // Verifica se o telefone não está vazio
            this.#telefone = telefone;
        } else {
            throw new Error("Telefone inválido.");
        }
    }

    setEndereco(endereco) {
        if (typeof endereco === "string" && endereco.trim() !== "" && endereco.length < 100) {
            // Verifica se o endereço não está vazio e não ultrapassa 100 caracteres
            this.#endereco = endereco;
        } else {
            throw new Error("Endereço inválido.");
        }
    }

    setId(valor){
        this.#id = valor;
    }


     // Método para retornar um objeto contendo os campos e valores do contato
     toObject() {
        return {
            id: this.#id,
            nome: this.#nome,
            telefone: this.#telefone,
            endereco: this.#endereco
        };
    }
}

export {Contato};