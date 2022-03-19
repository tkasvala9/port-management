import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponantComponent } from './country-componant/country-componant.component';
import { LoginComponantComponent } from './login-componant/login-componant.component';

const routes: Routes = [
  
  {
    path:'',
    component:LoginComponantComponent
  },
  {
    path:'home',
    component:CountryComponantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
