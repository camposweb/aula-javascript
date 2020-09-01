/* var nome = 'Leandro Campos';
var idade = 31;
var idade2 = 10;
var frase = 'Japão é o melhor time do mundo';
//alert(nome + ' tem ' + idade + ' anos.');
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase(frase));
//alert(frase.replace('Japão', 'Brasil')); */

/* var lista = ['maçã', 'pêra', 'laranja']
lista.push('uva');
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(' - '));
 */

/*  var fruta = [{nome: 'maçã', cor: 'vermelha'}, {nome: 'uva', cor: 'roxa'}]
 console.log(fruta);
 alert(fruta[1].nome); */


/*  var idade = prompt('Qual sua idade?');
 
 if (idade >= 18) {
     alert('Maior de idade');
 } else {
     alert('Menor de idade');
 } */


/*  var count = 1;

 while (count <= 5) {
     alert(count);
     count++;
 } */

/*  var count = 0;

 for (count = 0; count <= 5; count++){
    alert(count);
 } */


/*  var d = new Date();
 alert(d); */

 function soma(n1, n2){
     return n1 + n2;
 }


function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

/* var idade = prompt('Digite sua idade');
console.log(validaIdade(idade)) */

 //alert(soma(5, 10));

 function clicou(){
     document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar.</b>'
 }

 function redirecionar(){
     window.open('https://digitalinnovation.one/');
 }

 function trocarTexto(){
     document.getElementById('mouseover').innerHTML = '<p class="fundo">Obrigado por passar o mouse</p>';
     //alert('trocar texto');
 }

 function voltar(){
     document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui';
 }
 