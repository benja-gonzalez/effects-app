import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsrsActions } from '../actions/index';

export interface UsuariosState {
    usuarios: UsuarioModel[],
    loaded  : boolean,
    loading : boolean,
    error   : any
}

export const initialState: UsuariosState = {
    usuarios: [],
    loaded  : false,
    loading : false,
    error   : null
}

const _usuariosReducer = createReducer(initialState, 
    on(UsrsActions.addUsuarios, state => ({ ...state, loading: true})),
    on(UsrsActions.addUsuariosSuccess, (state,{usuarios}) => ({ ...state, loading: false, loaded: true, usuarios:[...usuarios] })),
    on(UsrsActions.addUsuariosError, (state,{payload})=> ({ 
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

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}