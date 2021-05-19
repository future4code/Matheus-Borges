console.log('Olá mundo!');

let nome:any

enum MARCA_DE_CARRO {
    FORD = "Ford",
    VOLKSWAGEM = "VolksWagen",
    PEUGEOUT = "Peugeout",
    CITROEN = "Citroen"
}

type carro = {
    marca: string,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    calcularAutonomia: (combustivel: number) => number
}

function calcAutonomia(combustivel:number): number{
    return combustivel * 15
}

const mustang: carro = {
    marca: MARCA_DE_CARRO.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    calcularAutonomia: calcAutonomia
}

const gol: carro = {
    marca: MARCA_DE_CARRO.VOLKSWAGEM,
    volumeDoTanque: 55,
    temMotorFlex: true,
    calcularAutonomia: calcAutonomia
}

const golQuadrado: carro = {
    marca: MARCA_DE_CARRO.VOLKSWAGEM,
    volumeDoTanque: 58,
    temMotorFlex: true,
    calcularAutonomia: calcAutonomia
}

const garagem: carro[] = []
garagem.push(mustang)
garagem.push(gol)
garagem.push(golQuadrado)
console.table(garagem)

function buscarCarrosPorMarca (frota: carro[], marca?: string): carro[] {

    if (marca === undefined) {
        return frota
        }

        return frota.filter(
        (carro) => {
        return carro.marca === marca
        }
    )
}

const minhaFrota: carro[] = buscarCarrosPorMarca(garagem, "Ford")

console.table(minhaFrota)

//vendo a kilometragem do gol
const kmDoGol = gol.calcularAutonomia(gol.volumeDoTanque)

console.log(`Um gol de tanque cheio faz ${kmDoGol} km por hora`)