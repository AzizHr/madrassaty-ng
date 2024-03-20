import { Injectable } from '@angular/core';
import {AuthResponse} from "../../models/response/auth-response.models";

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  private USER_KEY: string = 'user';

  constructor() {}

  public getToken(): string | null {
      const userString = localStorage.getItem(this.USER_KEY);
      if (userString) {
        const user = JSON.parse(userString);
        return user.token;
      }
      return null;
  }

  public saveUser(user: AuthResponse): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): AuthResponse | null {
    const userString = localStorage.getItem(this.USER_KEY);
    if (userString) {
      return JSON.parse(userString);
    }
    return null;
  }

  public removeUser() {
    localStorage.removeItem(this.USER_KEY);
  }
}
