
import { Injectable } from '@angular/core';
import User from './User';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import {  Router } from '@angular/router';

@Injectable()
export class UserService {

  public user = new User();
  public url :string = 'http://test.com/'
  public constructor(protected http: HttpClient, protected authService: AuthService, public router: Router) { }

  public login(email: string, password: string) {
    this.authService.login(email, password).subscribe(data =>{
        console.log(this.user, data, data.data['auth'], data.data)
      if (data.data['auth'].type ){
          this.user.isLogged = true;
          console.log('nik', this.user)
          localStorage.setItem('type', data.data['auth'].type);
          this.user.type = data.data['auth'].type;
          this.user.isLogged = true;
          this.router.navigate(['/']);
      }
    })

  }

}
