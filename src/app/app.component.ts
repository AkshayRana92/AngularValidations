import {Component,
    AfterViewChecked,
    ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppValidationMessages} from "./app.messages";
@Component({
  selector: 'my-app',
  moduleId: module.id,

  template: `
  <div class="container">
  <div class="row">
  <form #myForm="ngForm" (ngSubmit)="submitForm()">

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h1>Form Validations</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <input type="email" email required name="email" [(ngModel)]="email" class="form-control" placeholder="email"/>
      </div>
      <div class="col-md-4 col-md-offset-4">
        <div *ngIf="formErrors.email" class="alert alert-danger">{{formErrors.email}}</div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <input type="password" minlength="8" required name="password" [(ngModel)]="password" class="form-control" placeholder="password"/>
      </div>
      <div class="col-md-4 col-md-offset-4">
        <div *ngIf="formErrors.password" class="alert alert-danger">{{formErrors.password}}</div>
      </div>
    </div>


    <div class="row">
      <div class="col-md-4 col-md-offset-4">

        <div *ngIf="myForm.form.valid;then formValid else formError"></div>
        <ng-template #formValid><button class="btn btn-primary" type="submit">Submit</button></ng-template>
        <ng-template #formError><button class="btn btn-primary" type="button" (click)="submitInvalidForm()">Submit</button></ng-template>

      </div>
    </div>

  </form>
  </div>
  </div>
  `,
  styles: ['form{ margin : 100px}', '.row{ margin-bottom : 10px}','button{width: 100%}']
})

export class AppComponent implements AfterViewChecked{
  formErrors = {
    'email': '',
    'password': ''
  };

  myForm: NgForm;
  @ViewChild('myForm') currentForm: NgForm;

  email: string = '';
  password: string = '';

  submitForm() {
    alert('email : ' + this.email + '\npass : ' + this.password)
  }

  ngAfterViewChecked() {
    this.formChange();
  }

  formChange() {
    if (this.currentForm === this.myForm) { return; }

    this.myForm = this.currentForm;
    if (this.myForm) {
      this.myForm.valueChanges
          .subscribe(data => this.onValueChanged());
    }
  }

  onValueChanged() {
    if (!this.myForm) { return; }
    const form = this.myForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = AppValidationMessages.errorMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] = messages[key];
        }
      }
    }
  }

  submitInvalidForm() {
    if (!this.myForm) { return; }
    const form = this.myForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && !control.valid) {
        const messages = AppValidationMessages.errorMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] = messages[key];
        }
      }
    }
  }
}
