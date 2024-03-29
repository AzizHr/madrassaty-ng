import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtStorageService} from "../services/jwt/jwt-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private jwtStorageService: JwtStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('/login') || request.url.endsWith('/register') || request.url.endsWith('/schools')) {
            return next.handle(request);
        }
        const modifiedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.jwtStorageService.getToken()}`
            }
        });

        return next.handle(modifiedRequest);
    }
}

export const AuthInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
