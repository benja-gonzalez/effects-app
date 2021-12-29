import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const addUsuario        = createAction('[USUARIO] Agregrar usuario',props<{id:string}>());
export const addUsuarioSuccess = createAction('[USUARIO] Agregrar usuario success', props<{usuario: UsuarioModel}>());
export const addUsuarioError   = createAction('[USUARIO] Agregrar usuario error', props<{payload: any}>());