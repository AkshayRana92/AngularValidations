import { Component } from '@angular/core';

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
        <input type="text" name="email" [(ngModel)]="email" class="form-control" placeholder="email"/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <input type="text" name="password" [(ngModel)]="password" class="form-control" placeholder="password"/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>
    </div>

  </form>
  </div>
  </div>
  `,
  styles: ['form{ margin : 100px}', '.row{ margin-bottom : 10px}','button{width: 100%}']
})

export class AppComponent  {

  email: string = '';
  password: string = '';

  submitForm() {
    alert('email : ' + this.email + '\npass : ' + this.password)
  }

}
