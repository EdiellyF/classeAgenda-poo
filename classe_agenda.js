

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
            const container = document.getElementById('mydiv');
            container.innerHTML = "";
            agendaViewer.exibirContatos('mydiv')
        } else {
            console.log("Nenhum contato encontrado.");
        }
    }
    
    
    editarContato(id, nome, endereco, telefone) {
        for (let i = 0; i < this.#contatos.length; i++) {
            if (this.#contatos[i].id == id) {
                this.#contatos[i].id = id;
                this.#contatos[i].nome = nome;
                this.#contatos[i].telefone = telefone;
                this.#contatos[i].endereco = endereco; 
                this.salvar(); 
                break; 
            }
        }
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
            container.appendChild(contatoContainer);

                    btnRemover.addEventListener('click', (event) => {
                        event.preventDefault();
                        // Instanciar a Agenda e o AgendaViewer
                        const agenda = new Agenda();
                        const agendaViewer = new AgendaViewer(agenda.getAgenda());
                        const idParaRemover = event.target.dataset.id;
                        agenda.remover(parseInt(idParaRemover));
                        agenda.salvar();
                        agendaViewer.exibirContatos('mydiv');
                    });

        const btnEditar = document.createElement('button'); 
        btnEditar.classList.add('editar-contato'); 
        btnEditar.dataset.contatoId = contato.id;
    
        btnEditar.addEventListener('click', (event) => {
            event.preventDefault();
            const elementosParaRemover = document.querySelectorAll('#mostrarAgenda, #btnBuscar, #limpar, #btnInserir');
            elementosParaRemover.forEach(elemento => elemento.remove());   
            container.innerHTML = "";
        
            const agenda = new Agenda();
            
            // Preencher os campos de entrada com os dados do contato
            const contatoId = event.target.dataset.contatoId; // Capturar o ID do contato do botão clicado
            document.getElementById("nome").value = contato.nome;
            document.getElementById("endereco").value = contato.endereco;
            document.getElementById("telefone").value = contato.telefone;
        
            const btnAtualizar = document.createElement('button');
            btnAtualizar.innerText = 'Atualizar';
        
            btnAtualizar.addEventListener('click', () => {
                agenda.editarContato(contatoId,
                    document.getElementById("nome").value,
                    document.getElementById("endereco").value,
                    document.getElementById("telefone").value 
                );
                
                agenda.salvar();
                const agendaViewer = new AgendaViewer(agenda.getAgenda());
                agendaViewer.exibirContatos('mydiv')
            });
        
            document.querySelector('form').appendChild(btnAtualizar);
        });
          
            contatoContainer.appendChild(btnEditar);
            contatoContainer.appendChild(btnRemover);
            container.appendChild(contatoContainer);
        }
    }
}


export {Agenda, AgendaViewer};