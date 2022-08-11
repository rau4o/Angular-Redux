import {Injectable} from '@angular/core';

@Injectable()

export class UtilsService {

  constructor() {
  }

  public range(start: number, end: number): number[] {
    console.log(end)
    return [...Array(end).keys()].map(el => el + start);
  }
}
