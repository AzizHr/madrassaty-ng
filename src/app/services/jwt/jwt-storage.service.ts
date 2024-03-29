import { Injectable } from '@angular/core';
import {AuthResponse} from "../../models/response/auth-response.models";

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  private ACCESS_TOKEN_KEY: string = 'accessToken';

  constructor() {}

  public getToken(): string | null {
      const accessToken = localStorage.getItem(this.ACCESS_TOKEN_KEY);
      if (accessToken) {
        return accessToken;
      }
      return null;
  }

  public saveAccessToken(authResponse: AuthResponse ): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.setItem(this.ACCESS_TOKEN_KEY, authResponse.accessToken);
  }

  public removeAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }
}
