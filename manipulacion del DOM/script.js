const nike = document.getElementById('nike')
const adidas = document.getElementById('adidas')
const anta = document.getElementById('anta')
const marca361 = document.getElementById('361°')
const fondo = document.getElementById('fondo')

function cambiarNike(){
    fondo.style.background = 'url(images.jfif) no-repeat center/cover'
}

function cambiarAdidas(){
    fondo.style.background = 'url(fondoAdidas.jfif) no-repeat center/cover'
}

function cambiarAnta(){
    fondo.style.background = 'url(anta.jfif) no-repeat center/cover'
}

function cambiar361(){
    fondo.style.background = 'url(361.jfif) no-repeat center/cover'
}

nike.addEventListener('click', cambiarNike);
adidas.addEventListener('click', cambiarAdidas);
anta.addEventListener('click',cambiarAnta);
marca361.addEventListener('click',cambiar361);