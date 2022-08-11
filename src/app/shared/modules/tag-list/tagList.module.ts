import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TagListComponent} from './components/tag-list.component';

@NgModule({
  declarations: [
    TagListComponent
  ],
  exports: [
    TagListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TagListModule {}
