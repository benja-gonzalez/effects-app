import { UsuarioEffects } from "./usuario.effects";
import { UsuariosEffects } from "./usuarios.effects"


export const effectsArray: any[] = [ UsuariosEffects, UsuarioEffects ];

// tipo de error que devuelve el effecto
export type ErrorEffect = 
{
    url    : string, 
    status : number, 
    name   : string, 
    message: string
}