import provedorCriptografica from "@/core/usuario/service/ProvedorCriptografia"

export default class EspacoSenhaCripto
    implements provedorCriptografica
{
    public criptografar(senha: string): string {
        return senha.split("").join(" ")
    }
}
