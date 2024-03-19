class Agenda {
    #contatos = [];

    constructor(){
        if(localStorage.agenda === undefined){
            localStorage.agenda = "[]";
        }
        this.#contatos = JSON.parse(localStorage.agenda);
    }

    inserir(contato){
        this.#contatos.push(contato);
        this.salvar();
    }

    salvar(){
        localStorage.agenda = JSON.stringify(this.#contatos);
    }

     
getAgenda(){
    return this.#contatos;
}


}


class AgendaViewer {
    constructor(agenda) {
        this.agenda = agenda;
    }

    exibirContatos(id) {
        const container = document.getElementById(id);
        container.innerHTML = "";

        for (const contato of this.agenda) {
            const contatoContainer = document.createElement('div'); // Criar um contêiner para o contato
            contatoContainer.classList.add("estilizacaoContato");
            contatoContainer.innerHTML = `
            <p>Id: ${contato.id}
                <p>Nome: ${contato.nome}</p>
                <p>Endereço: ${contato.endereco}</p>
                <p>Telefone: ${contato.telefone}</p>
            `;

          

            container.appendChild(contatoContainer); // Adicionar o contêiner do contato ao contêiner principal
        }
    }
  
}


