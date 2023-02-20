
// tercer ejercicio

const empleado = document.querySelector('.nombre-trabajador');
const categoria = document.getElementById('categoria');
const salario = document.querySelector('.salario');
const dataSalario = document.querySelector('.data-aumento');







// creado funcion que maneje los datos previos


const categoriaSalario = () =>{


let ingeniero = 0.30;
let medico = 0.20;
let traductor = 0.15;
let abogado = 0.10;

    if (categoria.value == 'ingeniero'){

        let result = ((salario.value)) * ingeniero;

        dataSalario.innerHTML = `Empleado: ${empleado.value} <br> El aumento del 30% es: ${result}`;


    }

    else if (categoria.value == 'traductor'){
        
        let result = ((salario.value)) * traductor;

        dataSalario.innerHTML = `Empleado: ${empleado.value} <br> El aumento del 15% es: ${result}`;

       

    }

    else if (categoria.value == 'abogado'){
        
        let result = ((salario.value)) * abogado;

        dataSalario.innerHTML = `Empleado: ${empleado.value} <br> El aumento del 10% es: ${result}`;

       

    }


    else if (categoria.value == 'medico'){
        
        let result = ((salario.value)) * medico;

        dataSalario.innerHTML = `Empleado: ${empleado.value} <br> El aumento del 20% es: ${result}`;

       

    }

}

