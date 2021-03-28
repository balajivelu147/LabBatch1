import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { AuthCComponent } from './auth/auth-c/auth-c.component';
import { LoginComponent } from './auth/auth-c/login/login.component';
import { RegisterComponent } from './auth/auth-c/register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
  {path:'',component:AuthCComponent,
children:[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
]},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{path:'home/adduser',component:AdduserComponent},
{path:'home/:id',component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
