import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {PersistanceService} from '../../../shared/services/persistance.service';
import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/login.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable()

export class LoginEffect {

  constructor(private action$: Actions,
              private router: Router,
              private persistanceService: PersistanceService,
              private authService: AuthService) {
  }

  login$ = createEffect(() => this.action$
    .pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request)
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              this.persistanceService.set('accessToken', currentUser.token);
              return loginSuccessAction({currentUser});
            }),
            catchError((errorReponse: HttpErrorResponse) => {
              return of(loginFailureAction({errors: errorReponse.error.errors}));
            })
          );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.action$
    .pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
    {dispatch: false}
  );
}
