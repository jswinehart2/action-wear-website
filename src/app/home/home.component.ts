import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-header></app-header>
 <p>
   home works!
 </p>
  <!--Footer-->
  <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
