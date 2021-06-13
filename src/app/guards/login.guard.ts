import { Injectable } from '@angular/core';
import { CanActivate, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { AuthService } from '../services/auth.service';

// BRUNO
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

    canActivate(): Promise<boolean> {
      return new Promise(resolve => {
        this.authService.getAuth().onAuthStateChanged(user => {
          if (!user) this.router.navigate(['inicio']);

          resolve(user? true : false);
        })
      });
    }

  }
  
// NAO CONSEGUIMOS FAZER A AUTENTICACAO DO GUARD NO APP-ROUTER_CONFIGURATION.MODULE.TS
