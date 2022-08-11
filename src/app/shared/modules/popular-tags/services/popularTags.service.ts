import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PopularTagType} from '../../../types/popularTagType.type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';
import {GetPopularTagResponseInterface} from '../types/GetPopularTagResponse.interface';

@Injectable()

export class PopularTagsService {

  constructor(private http: HttpClient) {
  }

  public getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(`${url}`)
      .pipe(
        map((response: GetPopularTagResponseInterface) => {
          return response.tags;
        })
      );
  }
}
