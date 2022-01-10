import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
  <app-header></app-header>
    <p>
    example works!    
    </p>
  <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
