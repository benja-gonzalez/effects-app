import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsrActions } from '../actions/index';
import { ErrorEffect } from '../effects';

export interface UsuarioState {
    usuario: UsuarioModel | null,
    id     : string,
    loading: boolean, 
    loaded : boolean, 
    error  : ErrorEffect | null
}

export const initialState: UsuarioState = {
    usuario: null,
    id     : '',
    error  : null,
    loaded : false,
    loading: false
}

const _usuarioReducer = createReducer(initialState, 
    on(UsrActions.addUsuario, (state, {id}) => ({ ...state, loading: true, id:id})),
    on(UsrActions.addUsuarioSuccess, (state,{usuario}) => ({ ...state, loading: false, loaded: true, usuario:{...usuario} })),
    on(UsrActions.addUsuarioError, (state,{payload})=> ({ 
        ...state, 
        loading: false, 
        loaded : false, 
        error  : { 
            url    : payload.url, 
            status : payload.status, 
            name   : payload.name, 
            message: payload.message
        }
    })),
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}