import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthManagementService} from "../services/auth/auth-management/auth-management.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authManagementService: AuthManagementService, private router: Router) {}

  canActivate(): boolean {
    if (this.authManagementService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
