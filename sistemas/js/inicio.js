const barraLateral = document.getElementById('barra-lateral');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');

buttonLeft.addEventListener('click', () => {
    barraLateral.classList.add('hide');
})

buttonRight.addEventListener('click', () => {
    barraLateral.classList.remove('hide');
})