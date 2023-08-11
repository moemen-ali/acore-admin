import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  userObj = {
    name: "Super admin",
    email: "admin@acore.com"
  }

  constructor(private router: Router) {

  }

  logout() {
    //logout logic 
    this.router.navigate(['/auth/login']);
  }
}
