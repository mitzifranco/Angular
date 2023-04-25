import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ChartsModule } from '@progress/kendo-angular-charts';
//import { ButtonsModule } from '@progress/kendo-angular-buttons';
//import { InputsModule } from '@progress/kendo-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
//import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    //ChartsModule,
    FormsModule,
    HttpClientModule,
    //ButtonsModule,
    //InputsModule,
  ],
  template: ``,
})
export class App {
  name = 'All Aire';
}
enableProdMode();

const platform = platformBrowserDynamic();

bootstrapApplication(App);
