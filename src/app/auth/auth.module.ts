import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {UserService} from './user/user.service';
import { LoginComponent } from './login/login.component';
import {LoginGuardService} from './guard/login-guard.service';
import {LogoutGuardService} from './guard/logout-guard.service';
import {  MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  declarations: [ LoginComponent ],
  providers: [
    LoginGuardService,
    LogoutGuardService,
    UserService,

  ]
})
export class AuthModule { }
