import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { ResponseUsuarioById, ResponseUsuarios } from './usuarios.types';
import { UsuarioModel } from '../models/usuario.model';
// rxjs
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private _url     : string = `${environment.api_url}`;
	private _servlet : string = `api`;
	private _per_page: number = 6;
	private _delay   : number = 5

	constructor(
		private _http:HttpClient
	) { }
	// Listado de usuarios
	getUsuarios = (): Observable<UsuarioModel[]> => { 
		const url: string = `${this._url}/${this._servlet}/users?per_page=${this._per_page}&delay=${this._delay}`;
		return this._http.get<ResponseUsuarios>(url).pipe( map( (response:any) => response.data ));
	}
	// Usuario individual
	getUsuariosById = (payload:string): Observable<ResponseUsuarioById> => {
		const url: string = `${this._url}/${this._servlet}/users/${payload}`;
		return this._http.get<ResponseUsuarioById>(url);
	}
}
