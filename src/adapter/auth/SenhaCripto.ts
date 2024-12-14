import provedorCriptografica from "@/core/usuario/service/ProvedorCriptografia"
import bcrypt from "bcrypt"

export default class SenhaCripto
    implements provedorCriptografica
{
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(senha, salt)
    }
}
