const numeroMayor = document.querySelector('.numero-mayor');
const numeroMenor = document.querySelector('.numero-menor');
const contenedorSection4 = document.querySelector('.data-numeros');


const mostrarMayor = ()=>{

    if (numeroMayor.value > numeroMenor.value){

        contenedorSection4.innerHTML = ` El numero es mayor! Numero equivale: ${numeroMayor.value}`;
    }

    else if( numeroMenor.value > numeroMayor.value){

        contenedorSection4.innerHTML = ` El numero no es mayor! Intenta con otro numero `;
    }


}


