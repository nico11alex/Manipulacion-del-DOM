const boton = document.querySelector('button')
const texto = document.getElementById('color')
const mitadArriba = document.getElementById('mitad-de-arriba')

function cambiarColorAleatorio() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for(let i=0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio]
  }
  return colorHex
}


boton.addEventListener('click', function(){
  mitadArriba.style.backgroundColor=document.body.style.backgroundColor
  let colorAleatorio = cambiarColorAleatorio()
  texto.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
})