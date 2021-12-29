//-------------------------------------------------------------------------------------------------
// Effects: - Escuchar acciones que son despachadas por el ngrx/store.
//          - Simplificar la logica de los componentes.
//          - Comunicarse fuiera del ecosistema de Angular. (Http a servidores, comunicacion con sockets o tareas asincronas)
//-------------------------------------------------------------------------------------------------

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioModel } from "src/app/models/usuario.model";
import { UsuarioService } from "src/app/services/usuario.service";
import { UsrsActions } from "../actions";


@Injectable()
export class UsuariosEffects {

    constructor(
        // se coloca el signo $ para indicar que es un observable. es un estandar.
        private _actions$: Actions,
        private _us: UsuarioService
    ){}

    //-------------------------------------------------------------------------------------------------
    // Esto se repite cada vez que se quiera usar uns ervicio, es decir, (para cada service) => [effect].action;
    //-------------------------------------------------------------------------------------------------

    // creacion de un effecto. pd: DEBE DEVOLVER UNA ACCION
    cargarUsuarios$ = createEffect( ():any => this._actions$.pipe(
            ofType( UsrsActions.addUsuarios ),// Accion a escuchar cuando sea despachada.
            mergeMap(// hago un merge map para hacer el llamado http de mi servicio.
                () => this._us.getUsuarios().pipe(
                    // en caso afirmativo o de success va a ir por el operador 'map', y nos devuelve la accion de success.
                    map( (usuarios:UsuarioModel[]) => UsrsActions.addUsuariosSuccess({usuarios}) ),
                    // caso contrario, entra en el 'catchError', y nos devuelve esa accion de error.
                    catchError( (err) => of( UsrsActions.addUsuariosError({payload: err}) ) )
                )
            )
        )
    );

}

