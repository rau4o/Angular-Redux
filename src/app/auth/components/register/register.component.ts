import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store
      .pipe(
        select(isSubmittingSelector)
      );
    this.backendErrors$ = this.store
      .pipe(
        select(validationErrorsSelector)
      );
  }

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({request}));
  }
}
