// Calculador de notas

//variables globales los addvenlistener no pueden retornar solo modificar variables globales
var cargaValores;
var resultado;

var r = [];
function obtenerDatos( ) {



cargaValores = document.querySelector('.carga-valores').value;


  r = [cargaValores];
 
    return r
}


//se puede optimizar un poco mas para definir exactamente los input 
var cargaValores = document.querySelector('.carga-valores').value;

for (i=0; i<cargaValores.length; i++) {
    cargaValores[i].addEventListener("change",  function(){
  resultados = obtenerDatos();
 
 });
};

// const parrafo = document.querySelector('.estudiante-note')
// const carnet = document.querySelector('#carnet-estudiante')
// const nombreEstudiante = document.querySelector('#nombre-estudiante')
// let fragment = document.createDocumentFragment();

let misdatos = [];

// se podria poner un boton con la funcion actualizar datos en vez de utilizar un set interval para optimizarlo
//quizas se podria usar el request animation frame

function mostrarCarga() {

    
    misdatos = obtenerDatos();
 
    // promedio = (parseFloat(misdatos[0])*20)/100 + (parseFloat(misdatos[1]) * 40 )/100 + (parseFloat(misdatos[2]) * 10)/100 + (parseFloat(misdatos[3])*30)/100;
    
    // parrafo.innerHTML = `Estudiante: ${nombreEstudiante.value} <br> Carnet: ${carnet.value} <br> Nota promedio: ${promedio} `
    console.log(mostrarCarga())
   

  }


  
//   setInterval(actualizarDatos, 5000);

  
