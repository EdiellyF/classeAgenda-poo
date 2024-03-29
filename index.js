
import {Agenda, AgendaViewer } from './classe_agenda.js';
import {Contato } from "./classe_contato.js";

  document.addEventListener("DOMContentLoaded", function() {
      // Instanciar a Agenda e o AgendaViewer
      const agenda = new Agenda();
      const agendaViewer = new AgendaViewer(agenda.getAgenda());


    function geraNovoSerial() {
      // Obter o valor atual do serial do localStorage
      let valorSerial = parseInt(localStorage.getItem("serial") || "0");
      // Incrementar o valor do serial
      valorSerial++;
      // Armazenar o novo valor do serial no localStorage
      localStorage.setItem("serial", valorSerial.toString());
      // Retornar o novo valor do serial
      return valorSerial;
    }


    function mostrarAgenda(){
    agendaViewer.exibirContatos('mydiv')
    }


    document.getElementById("btnInserir").addEventListener("click", function(event) {
        event.preventDefault(); 
        try {
          const nome = document.getElementById("nome").value;
          const endereco = document.getElementById("endereco").value;
          const telefone = document.getElementById("telefone").value; 
          // Criar um novo objeto Contato
          const c = new Contato(nome, endereco, telefone);
          // Gerar um novo serial
          const novoSerial = geraNovoSerial();
          // Definir o serial para o contato
          c.setId(novoSerial);
          // Inserir o contato na agenda
          agenda.inserir(c.toObject());
          // Mostrar a agenda atualizada
          mostrarAgenda();

        } catch (error) {
          // Lidar com o erro
          alert("Erro   " + error.message);
        }
      });


    document.getElementById("btnBuscar").addEventListener("click", function(event){
        event.preventDefault(); 

        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        
        if (nome === "" || endereco === "" || telefone === "") {
            alert("Erro: Preencha todos os campos.");
        } else {
            agenda.buscar(telefone);
        }
    });

    
    document.addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("remover-contato")) {
          event.preventDefault(); 
          const idParaRemover = event.target.dataset.id;
          console.log(idParaRemover);
          agenda.remover(parseInt(idParaRemover));
          agenda.salvar();
          mostrarAgenda();
      }
  });

    document.addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("editar-contato")) {
          event.preventDefault(); 
          const idParaEditar = event.target.dataset.id;
          agenda.editarContato(parseInt(idParaEditar));
          agenda.salvar();
          mostrarAgenda();
      }
    });
});

