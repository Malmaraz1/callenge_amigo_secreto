// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var amigos = [];


function agregarAmigo() {
  let input = document.getElementById("amigo");
  let amigo = input.value.trim();
  if (!amigo) {
    alert("Agregar un valor de amigo");
    return;
  }
  amigos.push(amigo);
  crearElementoLi(amigo)
 
 
}
function crearElementoLi(amigo){
  let idamigos = document.getElementById('listaAmigos')
  const li = document.createElement('li');

  li.textContent = amigo
  idamigos.appendChild(li)
}


function mostraListaAmigos(){

let resultado = document.getElementById('resultado') 
resultado.innerHTML = '';
  const items = listaAmigos.querySelectorAll("li");
    items.forEach(item => {{
          console.log(item);
        }
    })
    return items;

 
}

function sortearAmigo(){
    const items = listaAmigos.querySelectorAll("li");

    const nombre = Math.floor(Math.random() * items.length)
    const nombreRandom = items[nombre].textContent
    let resultado = document.getElementById("resultado");
     resultado.innerHTML = nombreRandom;
}


