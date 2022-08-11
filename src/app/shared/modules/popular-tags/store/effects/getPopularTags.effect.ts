import {Injectable} from '@angular/core';
import {PopularTagsService} from '../../services/popularTags.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from '../action/getPopularTags.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PopularTagType} from '../../../../types/popularTagType.type';
import {of} from 'rxjs';

@Injectable()

export class GetPopularTagsEffect {

  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => {
      return this.popularTagsService.getPopularTags()
        .pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({popularTags});
          }),
          catchError(err => {
            return of(getPopularTagsFailureAction);
          })
        );
    })
  ));

  constructor(private actions$: Actions,
              private popularTagsService: PopularTagsService) {
  }
}
