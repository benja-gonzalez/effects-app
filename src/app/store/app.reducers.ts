import { ActionReducerMap } from '@ngrx/store';
import { UsrReducers, UsrsReducers } from './reducers';


export interface GlobalState {
   usuarios: UsrsReducers.UsuariosState,
   usuario : UsrReducers.UsuarioState 
}



export const appReducers: ActionReducerMap<GlobalState> = {
    usuarios: UsrsReducers.usuariosReducer,
    usuario : UsrReducers.usuarioReducer
}