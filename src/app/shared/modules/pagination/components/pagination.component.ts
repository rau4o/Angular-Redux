import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {UtilsService} from '../../../services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() total: number;
  @Input() url: string;
  @Input() currentPage: number;
  @Input() limit: number;

  public pages: number[];
  public pagesCount: number;

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }

  ngOnChanges(): void {
    // if (this.total && this.limit) {
    //   this.pagesCount = Math.ceil(this.total / this.limit);
    //   this.pages = this.utilsService.range(1, this.pagesCount);
    // }
  }
}
