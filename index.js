
const max = 100;
const min = 1;

let numeroX = Math.random()*(max-min) + min;

numeroX = parseInt(numeroX);

alert("HOLA! quieres jugar?")
console.log("HOLA! quieres jugar?");

const saludo = prompt("si o no?")
if (saludo == "si"){
    while (true){
        let usuario = prompt ("adivina el numero magico, es un numero entre 1 y 100");
        
        if(usuario == numeroX){
            alert("Ganaste!");
            console.log("Ganaste!");
            break
        }
        else if(usuario < numeroX){
            alert("El numero que elegiste es menor que el numero magico, vuelve a intentarlo" );
            console.log("El numero que elegiste es menor que el numero magico, vuelve a intentarlo" );
        }else if(usuario > numeroX){
            alert("El numero que elegiste es mayor que el numero magico, vuelve a intentarlo");
            console.log("El numero que elegiste es mayor que el numero magico, vuelve a intentarlo");
        }
    }
}else{
    alert("Nos vemos aburrido!");
    console.log("Nos vemos aburrido!")
}

