import Carro from "./Carro"

export default function corrida(
    carro: Carro,
    logger: (str: String) => void
) {
    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar()
        logger(`Velocidade: ${carro.velocidadeAtual} \n`)
    })

    Array.from({ length: 10 }).forEach(() => {
        carro.frear()
        logger(`Velocidade: ${carro.velocidadeAtual} \n`)
    })
}
