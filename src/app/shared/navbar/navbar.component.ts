import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [
	]
})
export class NavbarComponent implements OnInit {

	paramId     : number = 658465419846518949;
	formControl!: FormControl;
	constructor(
		private _router:Router
	) { 
		this.formControl = new FormControl('');
	}

	ngOnInit(): void {
	}

	goToUser = (): void => {
		if(!this.formControl.value) {
			return;
		}
		this._router.navigateByUrl('usuario/'+this.formControl.value);
	}

}
