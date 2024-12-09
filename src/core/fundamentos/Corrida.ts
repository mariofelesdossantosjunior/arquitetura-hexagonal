import { terminal } from "terminal-kit"
import Carro from "./Carro"

export default function corrida(carro: Carro) {
    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar()
        terminal.red(`Velocidade: ${carro.velocidadeAtual} \n`)
    })

    Array.from({ length: 10 }).forEach(() => {
        carro.frear()
        terminal.red(`Velocidade: ${carro.velocidadeAtual} \n`)
    })
}
