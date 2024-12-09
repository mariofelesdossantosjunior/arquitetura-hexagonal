import Carro from "@/core/fundamentos/Carro"
import corrida from "@/core/fundamentos/Corrida"
import Ferrari from "@/core/fundamentos/Ferrari"
import Fusca from "@/core/fundamentos/Fusca"
import TerminalUtil from "@/util/TerminalUtil"

export default async function dip() {
    TerminalUtil.titulo("DIP")

    const [tipo] = await TerminalUtil.selecao(
        "Selecione tipo do carro: ",
        ["Fusca", "Ferrari"]
    )

    let carro: Carro
    switch (tipo) {
        case 0:
            carro = new Fusca()
            break
        default:
            carro = new Ferrari()
            break
    }

    corrida(carro)
    await TerminalUtil.esperarEnter()
}
