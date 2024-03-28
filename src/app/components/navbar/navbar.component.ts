import { Component } from '@angular/core';
import {RoleCheckerService} from "../../services/auth/role-checker/role-checker.service";
import {JwtStorageService} from "../../services/jwt/jwt-storage.service";
import {ProfileResponse} from "../../models/response/profile-response";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
