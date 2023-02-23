const valorInput = document.querySelectorAll('.carga-valores');
const contenedor = document.querySelector('.data-ejercicio9');

let valores = [];
let cantNegativos = 0;
let cantPositivos = 0;
let cantMultiplos15 = 0;
let acumPares = 0;

// Se cargan los valores por teclado
function capturar() {
  for(let i = 0; i < valorInput.length; i++) {
    let valor = parseInt(valorInput[i].value);
    valores.push(valor);
  
    // Se realizan las comprobaciones correspondientes
    if(valor < 0) {
      cantNegativos++;
    } else if(valor > 0) {
      cantPositivos++;
    }
  
    if(valor % 15 === 0) {
      cantMultiplos15++;
    }
  
    if(valor % 2 === 0) {
      acumPares += valor;
    }
  }
  
  // Se muestran los resultados
  contenedor.innerHTML = `Cantidad de valores negativos: ${cantNegativos}<br>`;
  contenedor.innerHTML += `Cantidad de valores positivos: ${cantPositivos}<br>`;
  contenedor.innerHTML += `Cantidad de múltiplos de 15: ${cantMultiplos15}<br>`;
  contenedor.innerHTML += `Valor acumulado de los números pares: ${acumPares}<br>`;
}