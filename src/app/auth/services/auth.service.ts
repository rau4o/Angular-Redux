import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterRequestInterface} from '../types/registerRequest.interface';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AuthResponseInterface} from '../types/authResponse.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http.post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(
        map(response => response.user)
      );
  }
}
