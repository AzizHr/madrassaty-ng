import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {RoleCheckerService} from "../services/auth/role-checker/role-checker.service";
import {AuthManagementService} from "../services/auth/auth-management/auth-management.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authManagementService: AuthManagementService, private router: Router) {}

  canActivate(): boolean {
    if (this.authManagementService.isLoggedIn()) {
      window.history.back();
      return false;
    } else {
      return true;
    }
  }
}
