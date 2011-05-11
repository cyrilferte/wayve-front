import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public form: FormGroup = this.formBuilder.group({

      email: [
        null,
        [Validators.required]
      ],
      password: [
        null,
        [Validators.required, Validators.minLength(6)]
      ]
    });
//   emailFormControl = new FormControl('', [
//    Validators.required,
//    Validators.email,
//  ]);
//  passwordFormControl = new FormControl('', [
//   Validators.required,
//   Validators.password,
// ]);

 matcher = new MyErrorStateMatcher();

  constructor(public errorStateMatcher:ErrorStateMatcher, public formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
