import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularMaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
