//dark and light

const botonchange = document.getElementById("button");

botonchange.addEventListener("click", change);

function change() {

    let body = document.querySelector('.body')
    body.classList.toggle('change-mode-body')

    let textomain = document.querySelectorAll('.size')
    textomain.forEach(element => {
        element.classList.toggle('change-mode-size')
    });

    let letrasnav = document.querySelectorAll('a')
    letrasnav.forEach(element => {
        element.classList.toggle('change-mode-a')
    }); 
     
    let cajaexperiencia = document.querySelectorAll('.small-box')
    cajaexperiencia.forEach(element => {
        element.classList.toggle('change-mode-small-box')
    });




}