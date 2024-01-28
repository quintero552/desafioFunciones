
// VARIABLE GLOBAL (EJERCICIO - ULTIMO)
const llaveKey = document.querySelector('#key')
const a = 'pink'
const s = 'orange'
const d = 'aqua'

const q = 'blueviolet'
const w = 'darkgray'
const e = 'darkgoldenrod'

document.addEventListener('keydown', function (event){
    if (event.key === 'a' || event.key === 'A') {
        llaveKey.style.backgroundColor = `${a}`;
    }else if(event.key === 's' || event.key === 'S'){
        llaveKey.style.backgroundColor = `${s}`;
    }else if(event.key === 'd' || event.key === 'D'){
        llaveKey.style.backgroundColor = `${d}`;
    }
});


// Crear Elementos DIV con el TECLADO

document.addEventListener('keydown', function (event){
    /*if (event.key === 'Q' || event.key === 'q' || event.key === 'w' || event.key === 'W' || event.key === 'e' || event.key === 'E') {
        agregarElemento();
    }*/
    if (event.key === 'Q' || event.key === 'q') {
        let llaveKey = document.querySelector('#key')
        let nuevoContenedor = document.createElement('div');
        nuevoContenedor.classList.add('contenedor')
        llaveKey.appendChild(nuevoContenedor);
    }else if(event.key === 'w' || event.key === 'W'){
        let llaveKey = document.querySelector('#key')
        let nuevoContenedor = document.createElement('div');
        nuevoContenedor.classList.add('contenedorsito')
        llaveKey.appendChild(nuevoContenedor);
    }else if(event.key === 'e' || event.key === 'E'){
        let llaveKey = document.querySelector('#key')
        let nuevoContenedor = document.createElement('div');
        nuevoContenedor.classList.add('contenedor3')
        llaveKey.appendChild(nuevoContenedor);
    }
});



