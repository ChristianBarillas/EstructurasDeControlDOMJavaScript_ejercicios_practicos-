
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




// Calculador de notas

const examen = document.querySelector('.examen');
const tareas = document.querySelector('.tareas');
const asistencia = document.querySelector('.asistencia');
const investigacion = document.querySelector('.investigacion');


let nota1 = '';
let nota2 = '';
let noat3 = '';
let nota4 = '';



examen.addEventListener('change', ()=>{

    nota1 = examen.value;
    
});
// tareas.addEventListener('chage', mostrarDatos);
// asistencia.addEventListener('change', mostrarDatos);
// investigacion.addEventListener('change', mostrarDatos);



function mostrar(nota1){

    console.log(nota1)
}
