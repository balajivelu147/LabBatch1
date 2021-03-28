import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AuthCComponent } from './auth-c/auth-c.component';
import { RegisterComponent } from './auth-c/register/register.component';
import { UserService } from '../shared/user.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth-c/login/login.component';
import{RouterModule} from '@angular/router';
import { AuthInterceptor } from '../auth.interceptor';



@NgModule({
  declarations: [AuthCComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule
    
  ],
  providers:[UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],

})
export class AuthModule { }
