import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from "./background/background.component"
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
const routes: Routes = [
  {
    path : 'Home', component : BackgroundComponent
  },
 {
   path : 'Login', component : LoginComponent
 },
 {
  path : 'Register', component : RegisterComponent
},
{
  path : '', component : BackgroundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
