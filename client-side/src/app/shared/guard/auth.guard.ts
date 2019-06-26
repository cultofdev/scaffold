import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('isUserAuthenticated')) {
            return true;
        }

        window.location.href = 'http://localhost:4200';
        return false;
    }
}
