import {NgModule} from '@angular/core';
import {FeedTogglerComponent} from './components/feed-toggler.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FeedTogglerComponent],
  exports: [FeedTogglerComponent],
  imports: [CommonModule, RouterModule],
  providers: []
})

export class FeedTogglerModule {}
