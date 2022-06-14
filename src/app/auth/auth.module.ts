import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers';
import {AuthService} from './services/auth.service';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from './store/effects/register.effect';
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module';

const router: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
