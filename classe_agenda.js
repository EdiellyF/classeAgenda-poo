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
    remover(id){
       for(let i=0; i < this.#contatos.length; i++){
            if(this.#contatos[i].id === id){
                this.#contatos.splice(i,1)
            }
       }
    }
 
    buscar(telefone) {
        const pessoasFiltradas = this.#contatos.filter((contato) => 
             contato.telefone === telefone
        );
    
        if (pessoasFiltradas.length > 0) {
            const agendaViewer = new AgendaViewer(pessoasFiltradas);
            agendaViewer.exibirContatos("mydiv");
        } else {
            console.log("Nenhum contato encontrado.");
        }
    }
    
    editarContato(id, novoContato) {
        for (let i = 0; i < this.#contatos.length; i++) {
            if (this.#contatos[i].id === id) {
                this.#contatos[i] = novoContato; 
                this.salvar(); 
                return true; 
            }
        }
        return false;
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
            <p class="pink-id">Id: ${contato.id}</p>
                <p>Nome: ${contato.nome}</p>
                <p>Endereço: ${contato.endereco}</p>
                <p>Telefone: ${contato.telefone}</p>
            `;
            const btnRemover = document.createElement('button'); 
            btnRemover.classList.add('remover-contato'); 
            btnRemover.dataset.id = contato.id; 
            contatoContainer.appendChild(btnRemover);
            container.appendChild(contatoContainer);


            const btnEditar = document.createElement('button'); 
            btnEditar.classList.add('editar-contato'); 
            btnEditar.dataset.id = contato.id; 
            contatoContainer.appendChild(btnEditar);
            container.appendChild(contatoContainer);
        }
    }
}

  export {Agenda, AgendaViewer};