import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {RoleCheckerService} from "../services/auth/role-checker/role-checker.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roleCheckerService: RoleCheckerService, private router: Router) {}

  canActivate(): boolean {
    if (this.roleCheckerService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/manager/login');
      return false;
    }
  }
}
