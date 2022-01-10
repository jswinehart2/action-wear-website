import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-appointment',
  
  template: `
  <style>
/* Default Styling */
.button {
    width: 90px;
    
} 


</style>
  <app-header></app-header>
  <div class="columns">
    <div class="column is-two-fiths">
     <form class="box">
      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input class="input" type="date" placeholder="e.g. alex@example.com">
        </div>
      </div>

      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="name" placeholder="John">
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="name" placeholder="Smith">
        </div>
      </div>
      

      <button class="button is-info" style="width:200px;">Request Appointment</button>
      </form>
    </div>
    <div class="column">
    <form class="box">
      <div class="field">
        <label class="label">Select From Available Times</label>
      </div>
      <div class="field">
      <div class="buttons">
          <button class="button is-info">9:00am</button>
          <button class="button is-info">9:30am</button>
          <button class="button is-info">10:00am</button>
          <button class="button is-info">10:30am</button>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button class="button is-info">11:00am</button>
          <button class="button is-info">11:30am</button>
          <button class="button is-info">12:00pm</button>
          <button class="button is-info">12:30pm</button>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button class="button is-info">1:00pm</button>
          <button class="button is-info">1:30pm</button>
          <button class="button is-info">2:00pm</button>
          <button class="button is-info">2:30pm</button>
        </div>
      </div>
    </form>

    </div>
  </div>
  <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
