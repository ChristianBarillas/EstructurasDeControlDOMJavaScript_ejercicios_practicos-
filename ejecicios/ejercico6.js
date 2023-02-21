
// tercer ejercicio

const turismo = document.getElementById('turistico-playa');
const precioTurismo = document.querySelector('.precio-turismo');
const dataTurismo = document.querySelector('.data-turismo');








// creado funcion que maneje los datos previos


const infoTurismo = () =>{


let costasol = 0.05;
let panchimalco = 0.10;
let puertotriunfo = 0.15;


    if (turismo.value == 'costasol'){

        let result = ((precioTurismo.value)) * costasol;
        
        dataTurismo.innerHTML = `El descuento es: ${result}$`;

     


    }

    else if (turismo.value == 'panchimalco'){
        
        let result = ((precioTurismo.value)) * panchimalco;

        dataTurismo.innerHTML = `El descuento es: ${result}$`;

     

    }

    else if (turismo.value == 'puertotriunfo'){
        
        let result = ((precioTurismo.value)) * puertotriunfo;

        dataTurismo.innerHTML = `El descuento es: ${result}$`;

      

    }


   

}

