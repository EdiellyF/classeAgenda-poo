
//recuperar os dados via api
// $.get('https://viacep.com.br/ws/77060688/json/', function (dados){
//     console.log(dados);
// });

// $('#cep').blur(function (){
//     let vl = this.value;
//     $.get('https://viacep.com.br/ws/'+vl+'/json/', function (dados){
//         $('#endereco').val(` ${dados.logradouro} - ${dados.bairro} - ${dados.uf} ${dados.complemento}`);
//     });
// });

$('#cep').blur(function() {
    const input = this;
    recuperarCEP(input);
});

function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            'content-type': 'application/json;charset=utf-8',
        }
    };

    if (!input.validity.patternMismatch && !input.validity.valueMissing) {
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                $('#endereco').val(` ${data.logradouro} - ${data.bairro} - ${data.uf} ${data.complemento}`);
            })
            .catch(error => {
                console.error('Erro ao recuperar CEP:', error);
            });
    }
}
