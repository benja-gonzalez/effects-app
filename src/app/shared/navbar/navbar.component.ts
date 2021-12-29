import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [
	]
})
export class NavbarComponent implements OnInit {

	paramId: number = 658465419846518949;

	constructor(
		private _router:Router
	) { }

	ngOnInit(): void {
	}

	goToUser = (value: string): void => {
		console.log({value})
		if(!value) {
			return;
		}
		this._router.navigate(['usuario', value])
	}

}
