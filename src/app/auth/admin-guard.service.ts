import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  role: string;
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {

    return this.authService.isAdmin()
      .map(
        response => {
          this.role = response.data[0].job_role;

          if (this.role === 'ADMIN') {
            return true;
          }

          this.router.navigate(['login']);
          return false;

        });
  }

}
