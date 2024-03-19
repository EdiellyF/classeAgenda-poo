document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("btnInserir").addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão de submissão do formulário

        try {
          // Pegar os valores dos campos
          const nome = document.getElementById("nome").value;
          const endereco = document.getElementById("endereco").value;
          const telefone = document.getElementById("telefone").value;
        
          // Criar um novo objeto Contato
          const c = new Contato(nome, endereco, telefone);

          // Gerar um novo serial
          const novoSerial = geraNovoSerial();

          // Definir o serial para o contato
          c.setId(novoSerial);

          // Criar um novo objeto Agenda
          const a = new Agenda();
          a.inserir(c.toObject());

      // Criar um novo objeto AgendaViewer passando a agenda como argumento
      const agendaViewer = new AgendaViewer(a.getAgenda()); // Corrigido aqui

      agendaViewer.exibirContatos('mydiv')


        } catch (error) {
          // Lidar com o erro
          alert("Erro   " + error.message);
        }
      });




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

    });