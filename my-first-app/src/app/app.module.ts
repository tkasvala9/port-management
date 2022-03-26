import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponantComponent } from './login-componant/login-componant.component';
import { CountryComponantComponent } from './country-componant/country-componant.component';
import { PortDetailComponent } from './country-componant/port-detail/port-detail.component';
import { PortsRecordComponent } from './ports-record/ports-record.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponantComponent,
    CountryComponantComponent,
    PortDetailComponent,
    PortsRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
