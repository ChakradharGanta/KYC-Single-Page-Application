import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelfieComponent } from './customer-details/selfie/selfie.component';
import { GovtIdComponent } from './govt-id/govt-id.component';
import { CongratsComponent } from './congrats/congrats.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    HeaderComponent,
    SelfieComponent,
    GovtIdComponent,
    CongratsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
