import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';

export const addUsuarios        = createAction('[USUARIOS] Agregrar usuarios');
export const addUsuariosSuccess = createAction('[USUARIOS] Agregrar usuarios success', props<{usuarios: UsuarioModel[]}>());
export const addUsuariosError   = createAction('[USUARIOS] Agregrar usuarios error', props<{payload: any}>());