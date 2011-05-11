import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class LogoutGuardService implements CanActivate {

  constructor(public router: Router, public userService: UserService) { }

  canActivate() {
    if (!this.userService.user.isLogged) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
