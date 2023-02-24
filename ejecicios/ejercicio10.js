function solicitarInfo (){

// Definimos tres arreglos para almacenar las edades de cada turno
const edadesManana = [];
const edadesTarde = [];
const edadesNoche = [];





// Función para calcular el promedio de un arreglo de edades
function calcularPromedio(edades) {
  const totalEdades = edades.reduce((acc, edad) => acc + edad, 0);
  return totalEdades / edades.length;
}

// Pedimos las edades y las agregamos a los arreglos correspondientes





for (let i = 0; i < 5; i++) {
  const edad = parseInt(prompt("Ingresa la edad del estudiante " + (i + 1) + " del turno mañana: "));
  edadesManana.push(edad);
}

for (let i = 0; i < 6; i++) {
  const edad = parseInt(prompt("Ingresa la edad del estudiante " + (i + 1) + " del turno tarde: "));
  edadesTarde.push(edad);
}

for (let i = 0; i < 11; i++) {
  const edad = parseInt(prompt("Ingresa la edad del estudiante " + (i + 1) + " del turno noche: "));
  edadesNoche.push(edad);
}




// Calculamos los promedios

const dataContenedor10 = document.querySelector('.data-estudiante')
const promedioManana = calcularPromedio(edadesManana);
const promedioTarde = calcularPromedio(edadesTarde);
const promedioNoche = calcularPromedio(edadesNoche);

// Imprimimos los promedios por consola
dataContenedor10.innerHTML = `El promedio de edades del turno mañana es: ${promedioManana} <br>`; 
dataContenedor10.innerHTML +=  `El promedio de edades del turno tarde es: ${ promedioTarde} <br>`;
dataContenedor10.innerHTML +=  `El promedio de edades del turno noche es: ${promedioNoche}<br>`;

// Determinamos cuál es el turno con mayor promedio
let turnoMayorPromedio = "";
let mayorPromedio = 0;

if (promedioManana > mayorPromedio) {
  mayorPromedio = promedioManana;
  turnoMayorPromedio = "mañana";
}

if (promedioTarde > mayorPromedio) {
  mayorPromedio = promedioTarde;
  turnoMayorPromedio = "tarde";
}

if (promedioNoche > mayorPromedio) {
  mayorPromedio = promedioNoche;
  turnoMayorPromedio = "noche";
}

// Mostramos el turno con mayor promedio por pantalla
dataContenedor10.innerHTML += `El turno con mayor promedio de edades es el turno ${turnoMayorPromedio}`;

}