
import { Injectable } from '@angular/core';
import User from './User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  public user = new User();
  public url :string = 'http://test.com/'
  public constructor(protected http: HttpClient) { }

  public checkUser(profile: any) {

    return this.http.get(this.url + 'auth/'  + '?format=json&email=' + profile.email + '&password=' + profile.password).subscribe(
      (resp) => {
        console.log(resp)
      }
    );
  }

}
