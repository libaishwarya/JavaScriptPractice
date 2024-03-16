const buttons = document.querySelectorAll('.btn');

buttons.forEach(button =>{
    button.addEventListener('click', function(event){
        alert('Button ${button.id} clicked!');  
});
});


