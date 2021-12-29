import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsrsActions } from 'src/app/store/actions';
import { ErrorEffect } from '../../store/effects';
import { GlobalState } from '../../store/app.reducers';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: [
	]
})
export class ListaComponent implements OnInit, OnDestroy {

	usuarios    !: UsuarioModel[];
	subscription!: Subscription;
	loading      : boolean = false;
	error       !: ErrorEffect;

	constructor(
		private _store: Store<GlobalState>
	) {
		this.subscription = this._store.select('usuarios').subscribe(
			({usuarios, loading, error}) => 
			{
				this.usuarios = usuarios;
				this.error    = error;
				this.loading  = loading;
			}
		);
	}
	
	ngOnInit(): void {
		this._store.dispatch(UsrsActions.addUsuarios());
	}
	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

}
