//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
var input = document.getElementById("amigo");
input.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault(); 
    document.getElementById('button-add').click();
  }
});

function adicionarAmigo(){
    let name = document.getElementById("amigo").value;
    if(name !== '' && !listaAmigos.includes(name)){
        listaAmigos.push(name);
        exibirListaAmigos(listaAmigos);
        amigo.value = '';
    }else if(!listaAmigos.includes(name) == false){
        alert("Digite sempre nomes diferentes");
    }else{
        alert ("Digite um nome");
     };
 }
  
 function exibirListaAmigos(){
     const listaElemento = document.getElementById("listaAmigos"); //aq pega o objeto LI do html
     listaElemento.innerHTML = ''; // Pegou e limpou a lista existente

     listaAmigos.forEach(amigo => { //aqui pega o array e chama cada item de amigo
       const novoAmigo = document.createElement("li"); //cada linha vai se chamar novoAmigo
       novoAmigo.textContent = amigo; //>linha< novoAmigo recebe >item< amigo

       listaElemento.appendChild(novoAmigo); // vai tirar do array e colocar na LI no HTML 
     });
 }
 function sortearAmigo() {
    const elementoresultado = document.getElementById("resultado");
    if (listaAmigos.length !== 0) {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        elementoresultado.innerHTML = `O amigo sorteado foi: ${listaAmigos[indiceAleatorio]}`;
    }else{
        alert("Lista zerada, adicione nomes");
    }
}

