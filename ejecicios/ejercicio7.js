
// tercer ejercicio

const ponderado1 = document.querySelector('.ponderado1');
const ponderado2 = document.querySelector('.ponderado2');
const cantidad1 = document.querySelector('.cantidad-digitada1');
const cantidad2 = document.querySelector('.cantidad-digitada2');
const dataPonderado = document.querySelector('.data-ponderado');








// creado funcion que maneje los datos previos


function mostrarPonderado() {



        if (cantidad1.value & cantidad2.value || ponderado1.value & ponderado2.value >= 0) {



                let result = cantidad1.value * (ponderado1.value / 100);




                let result2 = cantidad2.value * (ponderado2.value / 100);


                let promedio = (result + result2)

                dataPonderado.innerHTML = `El promedio de su notas es: ${promedio}`;







        }


        else {

                alert('Porfavor digita un valor valido!')
        }




}







