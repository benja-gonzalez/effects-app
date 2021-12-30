import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UsuarioModel } from '../../models/usuario.model';
import { UsrActions } from '../../store/actions';
import { GlobalState } from '../../store/app.reducers';
import { ErrorEffect } from '../../store/effects';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styles: [
	]
})
export class UsuarioComponent implements OnInit, OnDestroy {

	subscriptrion    !: Subscription;
	subscriptionStore!: Subscription;
	usuario			 !: UsuarioModel | null;
	isLoading         : boolean = false;
	error            !: ErrorEffect | null;

	constructor(
		private _ar: ActivatedRoute,
		private _store: Store<GlobalState>
	) { }

	ngOnInit(): void {
		this.subscriptrion = this._ar.params.subscribe(
			({id}) => {
				this._store.dispatch(UsrActions.addUsuario({id}))
			}
		);

		this.subscriptionStore = this._store.select('usuario').subscribe(
			({usuario, loading, error}) => {
				this.usuario = usuario;
				this.isLoading = loading;
				this.error = error;
			}
		)
	}

	ngOnDestroy(): void {
		this.subscriptrion.unsubscribe();
	}


}
