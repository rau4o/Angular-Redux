import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../../types/appState.interface';
import {PopularTagStateInterface} from '../types/popularTagState.interface';

export const popularTagsFeatureSelector = createFeatureSelector<AppStateInterface, PopularTagStateInterface>('popularTag');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagStateInterface) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagStateInterface) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagStateInterface) => popularTagsState.error
);
