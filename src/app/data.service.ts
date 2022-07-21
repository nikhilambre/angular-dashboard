import { AuthService } from './auth/auth.service';
import { UnauthorizedError } from './shared/errorlibrary/unauthorized-error';
import { BadInput } from './shared/errorlibrary/bad-input';
import { NotFoundError } from './shared/errorlibrary/not-found-error';
import { AppError } from './shared/errorlibrary/app-error';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  baseUrl: string = "http://localhost:8080/laravel/stores_duo/";
  constructor(
    private url: string, 
    private http: Http, 
    private authService: AuthService) { }

  imageHeaders = new Headers({
      "Accept": "application/json",
      "Authorization": "Bearer " + this.authService.getToken(),
  });

  headers = new Headers({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Authorization": "Bearer " + this.authService.getToken(),
  });

  getBaseUrl() {
    return this.baseUrl;
  }

  getAll() {
    return this.http.get(this.baseUrl + this.url + 's', { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getOne(id) {
    return this.http.get(this.baseUrl + this.url + '/' + id, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getForId(id) {
    return this.http.get(this.baseUrl + this.url + '/forId/' + id, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.baseUrl + this.url, JSON.stringify(resource), { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  createWithImage(resource) {
    return this.http.post(this.baseUrl + this.url, resource, { headers: this.imageHeaders })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.post(this.baseUrl + this.url + '/' + resource.id, JSON.stringify(resource), { headers: this.headers })
      .map((response: Response) => response.json())      
      .catch(this.handleError);
  }

  updateWithImage(resource, id) {
    return this.http.post(this.baseUrl + this.url + '/' + id, resource, { headers: this.imageHeaders })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  passwordChange(resource) {
    return this.http.put(this.baseUrl + this.url + '/change/' + resource.id, JSON.stringify(resource), { headers: this.headers })
      .map((response: Response) => response.json())      
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + this.url + '/' + id, { headers: this.headers })
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError(error));

    if (error.status === 401)
      return Observable.throw(new UnauthorizedError(error));
    
    return Observable.throw(new AppError(error));
  }
}