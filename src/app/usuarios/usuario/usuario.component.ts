import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styles: [
	]
})
export class UsuarioComponent implements OnInit, OnDestroy {

	id           !: string;
	subscriptrion!: Subscription;

	constructor(
		private _ar: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.subscriptrion = this._ar.params.subscribe(
			({id}) => {
				console.log({id})
			}
		)
	}

	ngOnDestroy(): void {
		this.subscriptrion.unsubscribe();
	}


}
