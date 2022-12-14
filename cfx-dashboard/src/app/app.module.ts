import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { LandingComponent } from './landing/landing.component';
// import { MDCFormFieldFoundation } from '@material/form-field';
// import { MatFormFieldModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    // MDCFormFieldFoundation
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // MDCFormFieldFoundation,
    // MatFormFieldModule
  ],
  providers: [HttpClient, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
