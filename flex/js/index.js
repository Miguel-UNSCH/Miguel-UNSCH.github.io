const itemContainer = document.getElementById('items-container');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
console.log(btnOpen.style.display)

btnOpen.addEventListener('click', () =>{
    itemContainer.classList.add('items-mobile');
    btnOpen.style.display = 'none';
})

btnClose.addEventListener('click', () =>{
    itemContainer.classList.remove('items-mobile');
    btnOpen.style.display = 'block';
})
