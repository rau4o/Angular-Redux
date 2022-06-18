import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  private getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(
        map(this.getUser)
      );
  }

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
      .pipe(
        map(this.getUser)
      );
  }

  public getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http.get(`${environment.apiUrl}/user`)
      .pipe(
        map(this.getUser)
      );
  }
}
