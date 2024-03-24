# Classe Agenda - Programação Orientada a Objetos

Este projeto foi desenvolvido como parte da disciplina de Programação Orientada a Objetos do curso de Informática para Internet. O objetivo da atividade é criar uma agenda de contatos utilizando os princípios da Programação Orientada a Objetos (POO).

## Funcionalidades

- **Cadastro de Contatos:** Permite adicionar novos contatos à agenda, incluindo informações como nome, telefone, e-mail, e endereço.
- **Listagem de Contatos:** Exibe todos os contatos cadastrados na agenda.
- **Exclusão de Contatos:** Permite excluir um contato da agenda pelo id.
- **API GET via CEP:** Utiliza jQuery para realizar consultas à API de CEP, preenchendo automaticamente o endereço do contato com base no CEP informado.

## Tecnologias Utilizadas

- **HTML:** Utilizado para estruturar a página da aplicação.
- **CSS (Bootstrap):** Framework de CSS utilizado para estilização da interface.
- **JavaScript (jQuery):** Utilizado para manipulação do DOM e interação com a API de CEP.
- **Programação Orientada a Objetos (POO):** Utilizada para estruturar a aplicação em classes e objetos, promovendo uma organização e reutilização de código.

## Estrutura do Código

- **Classe `Agenda`:**
  - Gerencia os contatos da agenda, incluindo métodos para inserir, salvar e remover contatos, bem como para obter a lista completa de contatos.
  
- **Classe `AgendaViewer`:**
  - Responsável por exibir os contatos da agenda na interface do usuário, criando elementos HTML dinamicamente com os dados dos contatos.


## Contribuidor

- **Edielly Ferreira:**.

## Como Utilizar

1. Clone ou baixe o repositório deste projeto.
2. Abra o arquivo `index.html` em um navegador web.
3. Utilize as funcionalidades da agenda de contatos conforme descrito acima.

## Licença

Este projeto está sob a [licença MIT](LICENSE).
