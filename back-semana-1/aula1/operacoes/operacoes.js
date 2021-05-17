const sinal = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])


switch(sinal){
    case "soma":
        return console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
        break;
    case "mult":
        return console.log(`${numero1} x ${numero2} = ${numero1 * numero2}`)
        break;
    case "subt":
        return console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
        break;
    case "divi":
        return console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
        break;
}

console.log(`${numero1} ${sinal} ${numero2} = ${totalSoma}.`)