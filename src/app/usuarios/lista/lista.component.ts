import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: [
	]
})
export class ListaComponent implements OnInit {

	usuarios!: UsuarioModel[];

	constructor(
		private _us: UsuarioService
	) { }

	ngOnInit(): void {
		this._us.getUsuarios().subscribe(
			(usuarios: UsuarioModel[]) => {
				console.log({ usuarios });
				this.usuarios = usuarios;
			}
		);
	}

}
