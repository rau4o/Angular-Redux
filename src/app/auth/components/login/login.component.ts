import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector, validationErrorsSelector} from '../../store/selectors';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {loginAction} from '../../store/actions/login.actions';
import {LoginRequestInterface} from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
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
    const request: LoginRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(loginAction({request}));
  }
}
