import TerminalUtil from "@/app/util/TerminalUtil"
import Usuario from "@/core/usuario/model/Usuario"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"
import SenhaCripto from "@/adapter/auth/SenhaCripto"
import RepositoriousuarioPg from "@/adapter/db/RepositorioUsuarioPg"

export default async function registrarUsuario() {
    const {
        campoRequerido,
        titulo,
        sucesso,
        error,
        esperarEnter,
    } = TerminalUtil
    
    titulo("Registrar usuário")

    const nome = await campoRequerido("Nome: ")
    const email = await campoRequerido("Email: ")
    const senha = await campoRequerido("Senha: ")

    const usuario: Usuario = { nome, email, senha }

    try {
        const provedorCripto = new SenhaCripto()
        const repositorioUsuario =
            new RepositoriousuarioPg()

        const CasoDeUso = new RegistrarUsuario(
            repositorioUsuario,
            provedorCripto
        )

        await CasoDeUso.executar(usuario)

        sucesso(`Usuário registrado com sucesso.`)
    } catch (e: any) {
        error(e.message)
    } finally {
        await esperarEnter()
    }
}
