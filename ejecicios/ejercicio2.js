
// Calculador de notas

//variables globales los addvenlistener no pueden retornar solo modificar variables globales
var examen, tareas, asistencia, investigacion;
var resultado;

var r = [];
function obtenerDatos( ) {



examen = document.querySelector('.examen').value;
tareas = document.querySelector('.tareas').value;
asistencia = document.querySelector('.asistencia').value;
investigacion = document.querySelector('.investigacion').value;

  r = [examen,tareas,asistencia,investigacion];
 
    return r
}


//se puede optimizar un poco mas para definir exactamente los input 
var input = document.getElementsByTagName("input");

for (i=0; i<input.length; i++) {
 input[i].addEventListener("change",  function(){
  resultados = obtenerDatos();
 
 });
};

const parrafo = document.querySelector('.estudiante-note')
const carnet = document.querySelector('#carnet-estudiante')
const nombreEstudiante = document.querySelector('#nombre-estudiante')
// let fragment = document.createDocumentFragment();

let misdatos = [];

// se podria poner un boton con la funcion actualizar datos en vez de utilizar un set interval para optimizarlo
//quizas se podria usar el request animation frame

function actualizarDatos() {

    
    misdatos = obtenerDatos();
    promedio = (parseFloat(misdatos[0])*20)/100 + (parseFloat(misdatos[1]) * 40 )/100 + (parseFloat(misdatos[2]) * 10)/100 + (parseFloat(misdatos[3])*30)/100;
    
    parrafo.innerHTML = `Estudiante: ${nombreEstudiante.value} <br> Carnet: ${carnet.value} <br> NotaPromedio: ${promedio} `

   

  }
  
//   setInterval(actualizarDatos, 5000);

  
