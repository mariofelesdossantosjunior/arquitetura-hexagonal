import Repositoriousuario from "@/core/usuario/service/RepositorioUsuario"
import Usuario from "../../core/usuario/model/Usuario"

export default class RepositoriousuarioEmMemoria
    implements Repositoriousuario
{
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario) {
        const items = RepositoriousuarioEmMemoria.items
        const usuarioExistente = await this.buscarPorEmail(
            usuario.email
        )
        if (usuarioExistente) return
        items.push(usuario)
    }

    async buscarPorEmail(
        email: string
    ): Promise<Usuario | null> {
        const items = RepositoriousuarioEmMemoria.items
        return (
            items.find(
                (usuario) => usuario.email === email
            ) ?? null
        )
    }
}
