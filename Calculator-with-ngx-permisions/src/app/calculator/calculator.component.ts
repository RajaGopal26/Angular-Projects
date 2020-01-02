import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit  {
	// registerForm: FormGroup;k
	constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) {}

	public num1:number;
	public num2:number;
	public result:number;
	public resultheading: any;
	perm :String[];
	ngOnInit(): void { 
	// 	this.registerForm = this.formBuilder.group({
	// 	num1: ['', Validators.required, Validators.minLength(6)],
	// 	num2: ['', Validators.required, Validators.minLength(6)]
		
	// });
		const perm =["ADMIN","EDITORS"];
	 
		this.permissionsService.loadPermissions(perm);
		
		this.http.get('/').subscribe((permissions) => {
			//const perm = ["ADMIN", "EDITOR"]; example of permissions
			this.permissionsService.loadPermissions(perm);
		 })
		 console.log("permission ",this.permissionsService.getPermissions);
		 window.localStorage.setItem("privilege", JSON.stringify(perm))
		 window.sessionStorage.setItem("privilege", JSON.stringify(perm))
	  }
	 
	//   onChange() {

    //     // stop here if form is invalid
    //     if (this.registerForm.invalid) {
	// 		alert('Invalid Input!! :-)')
    //         return;
    //     }

    //     alert('SUCCESS!! :-)')
    // }
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
			this.result = this.num1 / 100  * this.num2;
			this.resultheading = this.num1 + ' / ' + 100 + ' x '+ this.num2;
		}
		ngOnDestroy(): void {
			// window.localStorage.removeItem("");
			window.localStorage.clear;
			window.sessionStorage.removeItem("privilege");
			
		  }
}
