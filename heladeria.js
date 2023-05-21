const Helado = 100;
let topping = "Sugus";
let precio;
let precioFinal;

if (topping == "Oreo") {
precio = 10;
}
else if (topping == "KitKat") {
    precio = 15;
}
else {
   console.log ("Por el momento no contamos con ese topping");
}

precioFinal = precio + Helado;

console.log(precioFinal);

switch (eleccionDeMenu) {
    case "carne":
        console.log("vino tinto");
        break;
    case "pescado":
        console.log("vino blanco");
        break;
        case "verduras":
        console.log("agua");
        break;
        default:
        console.log("Elija carne, pescado o verduras para su cena");
        break;
}


var cosasParaLaTarea = ["cosa1", "cosa2", "cosa3", "cosa4", "cosa5"];

console.log("Recorriendo el array de cosas para la tarea:");
for (var i = 0; i < cosas.length; i++) {
    console.log(cosas[i]);
}

var nuevoCosoParaLaTarea = "dato6";
cosas.push(nuevaCosaParaLaTarea);

console.log("Recorriendo el array de cosas de la tarea:");
for (var i = 0; i < cosas.length; i++) {
    console.log(cosas[i]);
}
var numero = 1;

while (numero < 11) {
    console.log("El número " + numero + "es menor a 11");
    numero++;
}
