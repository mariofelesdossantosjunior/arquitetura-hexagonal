import provedorCriptografica from "../../core/usuario/service/ProvedorCriptografia"

export default class InverterSenhaCripto
    implements provedorCriptografica
{
    criptografar(senha: string): string {
        return senha.split(``).reverse().join(``)
    }
}
