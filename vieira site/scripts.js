/* 

         variável
3 jeitos de criar uma variavel.
1 var= não ultilizavel mais.
2 let =  constante vc pode altera seu código.
3 const = vc não poderá mais altera seu código.

*/

/* funções*/

/*function  */  

/* Eventos*/

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){

    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"


}
    