import { UnauthorizedError } from '../shared/errorlibrary/unauthorized-error';
import { Router } from '@angular/router';
import { AppError } from '../shared/errorlibrary/app-error';
import { NotFoundError } from '../shared/errorlibrary/not-found-error';
import { BadInput } from '../shared/errorlibrary/bad-input';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  user = '';
  constructor(private http: Http, private router: Router) { }

  private url = 'http://localhost:8080/laravel/stores_duo/oauth/token';
  private user_url = 'http://localhost:8080/laravel/stores_duo/api/dashboard/user';

  login(resource) {
    this.user = resource.username;

    let postData = {
      username: resource.username,
      password: resource.password,
      grant_type: "password",
      client_id: 2,
      client_secret: "81klFSUkuePSAkSllGxicjlS464b94S5FvXzsXAQ",
      scope: "*"
    }

    return this.http.post(this.url, JSON.stringify(postData), {
      headers: new Headers({"Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"}) })
      .map(
        (response: Response) => {
          const access_token = response.json().access_token;
          const refresh_token = response.json().refresh_token;
          const expires_in = response.json().expires_in;

          return {access_token: access_token, refresh_token: refresh_token, expires_in: expires_in};
        })
      .do(
        (tokenData) => {
          var expiry = tokenData.expires_in + Date.now();
          localStorage.setItem('auth_token', tokenData.access_token);
          localStorage.setItem('expiration', expiry);
          localStorage.setItem('refresh_token', tokenData.refresh_token);
          localStorage.setItem('user', this.user);
        })
      .catch(this.handleError);
  }
  
  logout() {
    this.destroyToken();
    this.router.navigate(['auth/login']);
    window.location.reload();
    return true;
  }

  headers = new Headers({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Authorization": "Bearer " + this.getToken(),
  });

  isAuthenticated() {
    var expiry = localStorage.getItem('expiration');

    if ( (Date.now() + 2700000) > parseInt(expiry) ) {
      this.refreshToken();
    }

    if (localStorage.getItem('auth_token')) {
      return true;
    }

    else {
      this.destroyToken();
      return false;
    }
  }

  isAdmin() {
    var userId = localStorage.getItem('user');

    return this.http.get(this.user_url + '/forUser/' + userId, { headers: this.headers })
    .map((response: Response) => response.json())
    .catch(this.handleError);
  }

  getToken() {
    var token = localStorage.getItem('auth_token');
    var expiry = localStorage.getItem('expiration');
    var user = localStorage.getItem('user');

    if ( !token || !expiry || !user || (Date.now() > parseInt(expiry)) ) {
      this.destroyToken();
      return false;
    }

    if (token) {
      return token;
    }

    return null;
  }

  private refreshToken() {
    var refToken = localStorage.getItem('refresh_token');

    let refData = {
      grant_type: "refresh_token",
      refresh_token: refToken,
      client_id: 2,
      client_secret: "81klFSUkuePSAkSllGxicjlS464b94S5FvXzsXAQ",
      scope: "*"
    }

    this.http.post(this.url, JSON.stringify(refData), {
      headers: new Headers({"Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest"}) })
      .subscribe(
        (response: Response) => {
          const expiry = response.json().expires_in + Date.now();

          localStorage.setItem('auth_token', response.json().access_token);
          localStorage.setItem('refresh_token', response.json().refresh_token);
          localStorage.setItem('expiration', expiry);
        }, 
        (error) => {
          this.destroyToken();
          throw error;
        });
  }

  private destroyToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user');
    localStorage.removeItem('refresh_token');

    return false;
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 401)
      return Observable.throw(new UnauthorizedError(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError(error.json()));
    
    return Observable.throw(new AppError(error));
  }

}
