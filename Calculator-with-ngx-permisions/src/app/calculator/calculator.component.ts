import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
// import { MatToolbarModule } from '@angular/material';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

	constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) { }

	public num1: number;
	public num2: number;
	public result: number;
	public resultheading: any;
	public perm: string[];
	ngOnInit(): void {

		const perm = ["GUEST"];

		this.permissionsService.loadPermissions(perm);
	
		console.log("permission ", this.permissionsService.getPermissions);
		window.localStorage.setItem("privilege", JSON.stringify(perm))
		window.sessionStorage.setItem("privilege", JSON.stringify(perm))
	}

	sum() {
		this.result = this.num1 + this.num2;
		this.resultheading = this.num1 + ' + ' + this.num2;
	}

	diff() {
		this.result = this.num1 - this.num2;
		this.resultheading = this.num1 + ' - ' + this.num2;
	}
	mult() {
		this.result = this.num1 * this.num2;
		this.resultheading = this.num1 + ' x ' + this.num2;
	}
	div() {
		this.result = this.num1 / this.num2;
		this.resultheading = this.num1 + ' / ' + this.num2;
	}
	percent() {
		this.result = this.num1 / 100 * this.num2;
		this.resultheading = this.num1 + ' / ' + 100 + ' x ' + this.num2;
	}
	user(){
		let role=["EDITORS"];
		this.permissionsService.loadPermissions(role);
	}
	admin(){
		let role=["ADMIN"];
		this.permissionsService.loadPermissions(role);
	}
	ngOnDestroy(): void {
		// window.localStorage.removeItem("");
		window.localStorage.clear;
		window.sessionStorage.removeItem("privilege");

	}
}
