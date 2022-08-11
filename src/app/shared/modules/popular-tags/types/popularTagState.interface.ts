import {PopularTagType} from '../../../types/popularTagType.type';

export interface PopularTagStateInterface {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
