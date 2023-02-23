const celsius = document.querySelector('.celsius');
const dataGrados = document.querySelector('.data-grados');



class Temperatura {


    constructor(celsius){
        
        this.celsius = celsius;
   
    }



    obtenerdato(celsius){

        return this.farenheit = (celsius*1.8) +32;


    }


};


const grados = new Temperatura()



const mostrarGrados =() =>{
   
   let result = grados.obtenerdato(celsius.value)

   dataGrados.innerHTML = `La temperatura en farenheit es ${result} F`

}
   
