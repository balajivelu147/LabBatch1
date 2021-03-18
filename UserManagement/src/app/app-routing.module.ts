import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthuserComponent } from './authuser/authuser.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'authuser',component:AuthuserComponent,
  canActivate:[AuthGuard]},
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
