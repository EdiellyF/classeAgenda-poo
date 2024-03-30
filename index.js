
import {Agenda, AgendaViewer } from './classe_agenda.js';
import {Contato } from "./classe_contato.js";

  document.addEventListener("DOMContentLoaded", function() {
   


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

document.getElementById('mostrarAgenda').addEventListener('click', mostrarAgenda)
  function mostrarAgenda(){
       // Instanciar a Agenda e o AgendaViewer
       const agenda = new Agenda();
       const agendaViewer = new AgendaViewer(agenda.getAgenda());
      agendaViewer.exibirContatos('mydiv')
  }


  document.getElementById("btnInserir").addEventListener("click", function(event) {
      event.preventDefault(); 
      try {

         // Instanciar a Agenda e o AgendaViewer
    const agenda = new Agenda();
    const agendaViewer = new AgendaViewer(agenda.getAgenda());

        const nome = document.getElementById("nome").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value; 
        // Gerar um novo serial
        const novoSerial = geraNovoSerial();

        // Criar um novo objeto Contato
        const c = new Contato(nome, endereco, telefone);
        
        // Definir o serial para o contato
        c.setId(novoSerial);
        // Inserir o contato na agenda
        agenda.inserir(c.toObject());
        agendaViewer.exibirContatos('mydiv')

      } catch (error) {
        // Lidar com o erro
        alert("Erro   " + error.message);
      }
    });


    const btnBuscar =  document.getElementById("btnBuscar")
     btnBuscar.addEventListener("click", function(event){
      event.preventDefault(); 

      const nome = document.getElementById("nome").value;
      const endereco = document.getElementById("endereco").value;
      const telefone = document.getElementById("telefone").value;
      
      if (nome === "" || endereco === "" || telefone === "") {
          alert("Erro: Preencha todos os campos.");
      } else {
    // Instanciar a Agenda e o AgendaViewer
    const agenda = new Agenda();
    agenda.buscar(telefone);
    agenda.salvar()

      }
  });
  });
