import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// For using ngModel - two way binding we need this module
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { NgxPermissionsModule } from 'ngx-permissions';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot(),
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
   exports: [
    MatTabsModule,
    MatMenuModule,
    MatSidenavModule
  ],
})
export class AppModule { }
