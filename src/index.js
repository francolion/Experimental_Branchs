/*
* tipos de JS
* number
* string
*boolean
* null
* undefined
* object
* function


* tipos de TS
* any >>>>>> intentar no usar. Nos deja poner el valor que nosotros quisieramos y poder cambiarlo, es contraproducente porque al pedo usamos typescript
* unknown
* never
* arrays
* tuplas
* Enums


* tipos inferidos
*/
var extincionDinosaurios = 76000000;
var dinosaurioFavorito = 'T-Rex';
var extintos = true;
var mivariable;
mivariable = 56;
mivariable = 'gato malo';
function chanchitofeliz(config) {
    return config;
}
var animales = ['chanchito', 'feliz', 'felipe'];
var nums = [1, 2, 3, 4];
var checks = [];
var nums2 = [];
//animales.map(x => x.)// el autocompletado sugiere metodos segun el valor de la variable
var tupla = [1, 'chanchito feliz', 4, true];
var extrachica = 'xs';
var chica = 's';
var mediana = 'm';
var grande = 'l';
var extragrande = 'xl';
//pascalCase 
var Talla;
(function (Talla) {
    Talla["ExtraChica"] = "xs";
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
var variable1 = Talla.Grande;
console.log(variable1);
var estado = 2 /* LoadingState.Succes */;
var objeto = { id: 1, nombre: 'pedro', talla: Talla.Chica };
