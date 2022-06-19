import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {BannerModule} from '../shared/modules/banner/banner.module';
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module';
import {LoadingModule} from '../shared/modules/loading/loading.module';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
  declarations: [
    GlobalFeedComponent
  ],
})

export class GlobalFeedModule {}
