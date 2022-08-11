import {PopularTagStateInterface} from '../types/popularTagState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from './action/getPopularTags.action';

const initialState: PopularTagStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const popularTagReducer = createReducer(
  initialState,

  on(getPopularTagsAction, (state): PopularTagStateInterface => ({
    ...state,
    isLoading: true
  })),

  on(getPopularTagsSuccessAction, (state, action): PopularTagStateInterface => ({
    ...state,
    isLoading: false,
    data: action.popularTags
  })),

  on(getPopularTagsFailureAction, (state): PopularTagStateInterface => ({
    ...state,
    isLoading: false
  }))
)

export function reducers(state: PopularTagStateInterface, action: Action) {
  return popularTagReducer(state, action);
}
