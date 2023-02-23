const contenedor = document.querySelector('.data-estudiante');

// Función para calcular el promedio de un arreglo de edades
function calcularPromedio(edades) {
  const totalEdades = edades.reduce((acc, edad) => acc + edad, 0);
  return totalEdades / edades.length;
}

// Pedimos las edades y las agregamos a los arreglos correspondientes
const edadesManana = [];
const edadesTarde = [];
const edadesNoche = [];

for (let i = 0; i < 5; i++) {
  const edad = document.querySelector('.edades-manana').value;
  edadesManana.push(parseInt(edad));
}

for (let i = 0; i < 6; i++) {
  const edad = document.querySelector('.edades-tarde').value;
  edadesTarde.push(parseInt(edad));
}

for (let i = 0; i < 11; i++) {
  const edad = document.querySelector('.edades-noche').value;
  edadesNoche.push(parseInt(edad));
}

// Calculamos los promedios
const promedioManana = calcularPromedio(edadesManana);
const promedioTarde = calcularPromedio(edadesTarde);
const promedioNoche = calcularPromedio(edadesNoche);

// Imprimimos los promedios por consola
contenedor.innerHTML = `El promedio de edades del turno mañana es: ${promedioManana}. `;
contenedor.innerHTML += `El promedio de edades del turno tarde es: ${promedioTarde}. `;
contenedor.innerHTML += `El promedio de edades del turno noche es: ${promedioNoche}. `;

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
contenedor.innerHTML += `El turno con mayor promedio de edades es el turno ${turnoMayorPromedio}.`;

