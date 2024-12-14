import TerminalUtil from "@/app/util/TerminalUtil"
import polimorfismo from "../fundamentos/polimorfismo"
import dip from "../fundamentos/dip"
import registrarUsuario from "../usuario/registrarUsuario"

export default async function menuUsuario() {
    TerminalUtil.titulo("Usuário")

    const [indice] = await TerminalUtil.menu([
        "1. Registrar usuário",
        "Voltar",
    ])

    switch (indice) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}
