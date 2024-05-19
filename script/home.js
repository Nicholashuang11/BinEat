const button = document.querySelector('button')

button.addEventListener('mouseover', ()=>{
    button.style.backgroundColor = 'gray';
})

button.addEventListener('mouseout',()=>{
    button.style.backgroundColor = '';
})