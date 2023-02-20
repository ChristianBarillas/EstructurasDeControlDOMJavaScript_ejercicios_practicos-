
//comprobador de edad

const search = document.querySelector('.calculador-edad button');
const description = document.querySelector('.resultado')
const icono = document.querySelector('.icono i');


search.addEventListener('click',()=>{
    const edad = document.querySelector('.calculador-edad input');

    if (edad.value ==''){

       description.innerHTML = 'No selecionaste nada'
       icono.style.display ='none'
       return;
    
    }

    else if(edad.value < 0){

        description.innerHTML = 'La edad es invalida'
        icono.style.display ='none'
        return;
    }
  
icono.style.display = ''



    edad.value >= 18 ? ((description.innerHTML = 'Eres mayor de edad!'),(icono.classList.replace('fa-baby','fa-user'))): ((description.innerHTML = 'Eres menor de edad!'),(icono.classList.replace('fa-user', 'fa-baby' )));

  
    

   

})

