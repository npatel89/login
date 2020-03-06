import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isLoggedIn) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}