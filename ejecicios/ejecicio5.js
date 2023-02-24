
// tercer ejercicio

const carros = document.getElementById('carros');
const precioCoche = document.querySelector('.precio-coche');
const dataCoche = document.querySelector('.data-coche');
const imagen =  document.querySelector('.imagenes');





// creado funcion que maneje los datos previos


const infoCoche = () =>{


let fordfiesta = 0.05;
let fordfocus = 0.10;
let fordescape = 0.20;


    if (carros.value == 'fordfiesta'){

        let result = ((precioCoche.value)) * fordfiesta;
        
        dataCoche.innerHTML = `El descuento es: ${result}$`;

        

       imagen.setAttribute( 'src','./media/ford1.png')

        // dataCoche.innerHTML = `El descuento es: ${result}$`;
        // const resul2 = imagen.innerHTML = ` ${imagen}./media/ford1.png`

  


    }

    else if (carros.value == 'fordfocus'){
        
        let result = ((precioCoche.value)) * fordfocus;

        dataCoche.innerHTML = `El descuento es: ${result}$`;

        imagen.setAttribute( 'src','./media/ford2.png')

    }

    else if (carros.value == 'fordescape'){
        
        let result = ((precioCoche.value)) * fordescape;

        dataCoche.innerHTML = `El descuento es: ${result}$`;

        imagen.setAttribute( 'src','./media/ford3.png')

    }


   

}

