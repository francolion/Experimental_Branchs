
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

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = 'T-Rex';
let extintos: boolean = true; 

let mivariable
 mivariable = 56
 mivariable = 'gato malo';




 function chanchitofeliz (config: any) {
    return config
 }

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [ 1, 2, 3, 4]
let checks: boolean[] = []
let nums2: Array<number> = []

//animales.map(x => x.)// el autocompletado sugiere metodos segun el valor de la variable

let tupla: [number, string, number, boolean] = [1, 'chanchito feliz', 4, true]

const extrachica = 'xs'
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'
//pascalCase 
enum Talla { ExtraChica = 'xs', Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }
const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading , Succes, Error}

const estado = LoadingState.Succes
type Persona = 
    {
        readonly id: number, // no se reescribe
        nombre?: string // opcional
        talla: Talla,
    }

const objeto: Persona = { id: 1, nombre: 'pedro', talla: Talla.Chica} 
  
