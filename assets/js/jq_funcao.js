
//recuperar os dados via api
// $.get('https://viacep.com.br/ws/77060688/json/', function (dados){
//     console.log(dados);
// });

$('#cep').blur(function (){
    let vl = this.value;
    $.get('https://viacep.com.br/ws/'+vl+'/json/', function (dados){
        $('#endereco').val(` ${dados.logradouro} - ${dados.bairro} - ${dados.uf} ${dados.complemento}`);
    });
});