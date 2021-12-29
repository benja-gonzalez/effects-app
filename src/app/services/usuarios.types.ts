import { UsuarioModel } from "../models/usuario.model";

export type Support = 
{
     url :string,
     text:string 
};

export type ResponseUsuarioById = 
{ 
    data   : UsuarioModel, 
    support: Support
};

export type ResponseUsuarios =
{ 
    page       : number, 
    per_page   : number, 
    total      : number, 
    total_pages: number, 
    data       : UsuarioModel[], 
    support    : Support 
};