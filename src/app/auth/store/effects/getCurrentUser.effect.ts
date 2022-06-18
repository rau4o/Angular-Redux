import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {PersistanceService} from '../../../shared/services/persistance.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction} from '../actions/getCurrentUser.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {of} from 'rxjs';

@Injectable()

export class GetCurrentUserEffect {

  constructor(private action$: Actions,
              private persistanceService: PersistanceService,
              private authService: AuthService) {
  }

  getCurrentUser$ = createEffect(() => this.action$
    .pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser()
          .pipe(
            map((currentUser: CurrentUserInterface) => {
              return getCurrentUserSuccessAction({currentUser});
            }),
            catchError(() => {
              return of(getCurrentUserFailureAction());
            })
          );
      })
    )
  );
}
