const barraLateral = document.getElementById('barra-lateral');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

buttonLeft.addEventListener('click', () => {
    barraLateral.classList.add('hide');
})

buttonRight.addEventListener('click', () => {
    barraLateral.classList.remove('hide');
})

const photo = document.getElementById('photo');
const opciones = document.getElementById('opciones');

var estado = false
photo.addEventListener('click', () => {
    if (!estado){
        opciones.style.display = 'block';
        estado = true;
    }
    else {
        opciones.style.display = 'none';
        estado = false;
    }
})