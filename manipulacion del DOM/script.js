const nike = document.getElementById('nike')
const adidas = document.getElementById('adidas')
const anta = document.getElementById('anta')
const marca361 = document.getElementById('361°')
const fondo = document.getElementById('fondo')

function cambiarNike(){
    fondo.style.background = 'url(photos/fondoNike.png) no-repeat center/cover'
}

function cambiarAdidas(){
    fondo.style.background = 'url(photos/fondoAdidas.png) no-repeat center/cover'
}

function cambiarAnta(){
    fondo.style.background = 'url(photos/anta.png) no-repeat center/cover'
}

function cambiar361(){
    fondo.style.background = 'url(photos/361.png) no-repeat center/cover'
}

nike.addEventListener('click', cambiarNike);
adidas.addEventListener('click', cambiarAdidas);
anta.addEventListener('click',cambiarAnta);
marca361.addEventListener('click',cambiar361);