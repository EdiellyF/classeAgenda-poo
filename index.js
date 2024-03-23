

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

document.getElementById("btnRemover").addEventListener("click", function(event) {
      event.preventDefault(); // Evita o comportamento padrão de submissão do formulário
     
      let idParaRemover = prompt("Digite o ID do contato a ser removido:");
  
      idParaRemover = parseFloat(idParaRemover);
      agenda.remover(idParaRemover);
   
      // Mostrar a agenda atualizada
      mostrarAgenda();
  });


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
          // Inserir o contato na agenda
          agenda.inserir(c.toObject());
          // Mostrar a agenda atualizada
          mostrarAgenda();
    
        } catch (error) {
          // Lidar com o erro
          alert("Erro   " + error.message);
        }
      });

 




});


