const nom = document.getElementById("nombre");
const mon = document.getElementById("monto");

let nombres=[];
let montos=[];

function cargar(nombre1, mont0){
    nombres.push(nombre1);
    montos.push(mont0);
}

// function crear(nomArr,monArr){
//     const participantes = document.getElementById("participantes");
//     for(i=0; i< nomArr.length; i++){
//         const persona = document.createElement("p");
//         persona.innerText=nombres[i]+" "+montos[i];
        
//         participantes.append(persona);
//     }
// }

let count=0;
function crearParticipantes(nombresArr,montosArr){
    const participantes = document.getElementById("participantes");
    const persona = document.createElement("p");
    persona.innerText=nombres[count]+": $"+montos[count];
    
    participantes.append(persona)
    count++;
    
}

function calcTotal(montosArr){
    let total=0;
    for(let elemento of montosArr){
        total=total+elemento;
    }
    return total;
}

function total(){
    const resultado = document.getElementById("total");
    
    resultado.innerText = calcTotal(montos);
    console.log(calcTotal(montos))
    
}
function calcTotalPorPersona(){
    let total = calcTotal(montos);
    let totalPorPersona = total / nombres.length;
    return totalPorPersona;
}
function totalPorPersona(){
    const cadaUno = document.getElementById("cadaUno");
    cadaUno.innerText=calcTotalPorPersona();

}
// function mostrarArr(){
//     for(let elemento of nombres){
//         console.log(elemento);
//     }
//     for(let elemento of montos){
//         console.log(elemento);
//     }
// }


function enviar(){
    let monto =parseInt(mon.value);    
    let nombre = nom.value;
    cargar(nombre,monto);
    crearParticipantes(nombres,montos);
    total(montos);
    totalPorPersona();
   

}



   
    










































