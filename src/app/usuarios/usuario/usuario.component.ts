import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UsrActions } from 'src/app/store/actions';
import { GlobalState } from 'src/app/store/app.reducers';
import { UsrReducers } from 'src/app/store/reducers';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styles: [
	]
})
export class UsuarioComponent implements OnInit, OnDestroy {

	subscriptrion!: Subscription;

	constructor(
		private _ar: ActivatedRoute,
		private _store: Store<GlobalState>
	) { }

	ngOnInit(): void {
		this.subscriptrion = this._ar.params.subscribe(
			({id}) => {
				this._store.dispatch(UsrActions.addUsuario({id}))
			}
		)
	}

	ngOnDestroy(): void {
		this.subscriptrion.unsubscribe();
	}


}
