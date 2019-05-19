const opciones={

    nombre:{
        alias: "n",
        demand: true
    },
    matematicas:{
        alias: "m",
        demand: true
    },
    ingles:{
        alias: "i",
        demand: true
    },
    programacion:{
        alias: "p",
        demand: true
    }
}

let obtenerPromedio =(nota1, nota2, nota3)=> (nota1+nota2+nota3)/3;


const argv= require("yargs")
            .command("promedio", "calcular el promedio", opciones)
            .argv

module.exports = {
    obtenerPromedio,
    argv
};           


