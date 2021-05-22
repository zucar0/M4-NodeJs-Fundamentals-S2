// console.log(process);
// console.log(process.argv);

// const numero1 = parseInt(process.argv[2]);
// const numero2 = parseInt(process.argv[3]);

// console.log(numero1, "+", numero2, "=", numero1+numero2);

//Process con operador dinámico
// console.log(process.argv);
const operador = process.argv[2]
const numero1 = parseInt(process.argv[3]);
const numero2 = parseInt(process.argv[4]);

switch(operador){
    case "+":
        console.log(numero1, operador, numero2, "=", numero1+numero2);
    break;
    case "-":
        console.log(numero1, operador, numero2, "=", numero1-numero2);
    break;
}

// console.log(numero1, "+", numero2, "=", numero1+numero2);


