/* 
En un local que fabrica muebles se ha recibido un pedido de 20 tablas de madera de un proveedor.
Se ha realizado este programa para ingresar las medidas de cada una, controlar cuantas tablas tienen una medida mayor a 4 metros y ademas contar cuantas cumplen esa condicion
*/

const N = 20;
let contador = 0;

for (i = 1; i <= N; i++) {
  let medida = prompt("Ingrese una medida");
  console.log("La medida ingresada es " + medida);
  if (medida > 0) {
    if (medida > 4) contador++;
  } else console.log("Medida invalida");
}

console.log("Se ingresaron " + contador, "tablas mayores a 4 metros");
