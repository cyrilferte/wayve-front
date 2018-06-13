import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(public router: Router, public userService: UserService) { }

  canActivate() {
    console.log('mmm', this.userService.user)
    if (this.userService.user.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
