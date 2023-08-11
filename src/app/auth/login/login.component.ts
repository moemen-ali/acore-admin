import { enviornment } from './../../../environments/environment';
import { Component } from '@angular/core';
import { UserObj } from '../core/user-model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user = new UserObj();
  emailPattern = enviornment.emailPattern;
  showPassowrd = false;

  constructor(private router: Router, private translate: TranslateService) {}


  submit(loginForm: NgForm) {
    if(loginForm.valid) {
      // submit userObj to API
      this.router.navigate(['./books']);

    }
  }

  switchPassword() {
    this.showPassowrd = !this.showPassowrd;
  }
}
