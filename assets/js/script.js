/*3. ) Ejercicio const ele = document.querySelector('#ele1');*/

function pintar(element){
    element.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele));














