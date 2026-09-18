console.log("Hola mundo");


////ARROW FUNTION O FUNCION FLECHA
const numeroUno = 50;
const numeroDos = 27;

const suma = (a,b)=> {
    const sumaNumeros = b + a;
    console.log(sumaNumeros);
}

suma(numeroDos,33);
suma(28,49); 
suma(numeroUno,20);




///ARRAYS Y OBJETOS
////ARRAYS  - LISTAS
const array1 = ["texto1", "texto2", "texto3"]
const array = ["camisa de vestir", "remera blanca", "jeans"]

console.log(array);
console.log(array[2]);


//OBJETOS - 

const carlosYapura = {
    nombre: "Carlos",
    apellido: "Yapura",
    edad: 52,
    hijos: true,
    cantidadHijos: 2,
}

console.log(carlosYapura);
console.log(carlosYapura.apellido);

const arrayFamilia = [
    {
        nombre: "Juan Carlos",
        edad: 75,
        cantidadHijos: 4,
        parentesco: "Padre",
    },
    {
        nombre: "Claudia Susana",
        edad: 51,
        cantidadHijos: 2,
        parentesco: "hermana",
    },
    {
        nombre: "Nicolas Asuan Kaled",
        edad: 24,
        cantidadHijos: 1,
        parentesco: "hijo",
    }
]
console.log(arrayFamilia);
console.log(arrayFamilia[2].parentesco);

