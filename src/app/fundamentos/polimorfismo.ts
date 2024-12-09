import TerminalUtil from "@/util/TerminalUtil";

export default async function polimorfismo() {
    TerminalUtil.titulo('Polimorfismo')

    while (true) {
        TerminalUtil.limpar()

        const tipoCarro = await TerminalUtil.selecao('Tipo de Carro?', ['Ferrari', 'Fusca'])

        const continuar = await TerminalUtil.confirmacao('Deseja continuar?')
        if (!continuar) return
    }
}