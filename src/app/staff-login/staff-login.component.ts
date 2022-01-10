import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-login',
  template: `
    <app-header></app-header>
    <div class="container is-max-desktop">
      <div class="notification is-danger" style="margin-top:25px; margin-bottom:25px;">
        <form class="box">
          <div class="field">
            <label class="label">Email</label>
              <div class="control">
               <input class="input" type="email" placeholder="johnSmith@actionwearortho.com">
              </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" placeholder="********">
              </div>
          </div>

          <button class="button is-info">Sign in</button>
        </form>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class StaffLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
