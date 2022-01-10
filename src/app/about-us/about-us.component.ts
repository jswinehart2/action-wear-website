import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
  <app-header></app-header>
    <p>
   About us works!    
    </p>
  <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
