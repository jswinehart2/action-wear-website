import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
 <section class="hero is-danger is-small"> 
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">  
            <img src="/assets/img/AWO.png" alt="Logo">
          </a>
          <span id="burger" class="navbar-burger"(click)="triggerMenu()">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="hero" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" routerLink="/">
              Home
            </a>
            <a class="navbar-item" routerLink="/examples">
              Examples
            </a>
            <a class="navbar-item" routerLink="/aboutUs">
              About Us
            </a>
            <a class="navbar-item" routerLink="/staffLogin">
              Staff Login
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted" routerLink="/appointment">
                <span>Request An Appointment</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        <img src="/assets/img/action-wear-long.png" alt="Logo">
      </p>
      <p class="subtitle">
      <img src="/assets/img/slogan.png" alt="Logo">
      </p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <!--Bottom of page tabs-->
        </ul>
      </div>
    </nav>
  </div>
</section>


  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Function to trigger the burger menu, gets the menu and the burger
//  to allow them to be active on a small screen.
  triggerMenu(): void {
  var nav = document.getElementById("hero");
  if(nav != null){
    var className = nav.getAttribute("class");
    if(className == "navbar-menu") {
        nav.className = "navbar-menu is-active";
    } else {
        nav.className = "navbar-menu";
    }
  }
  var burger = document.getElementById("burger");
  if(burger != null)
  {
    var classNm = burger.getAttribute("class");
    if(classNm == "navbar-burger") {
      burger.className = "navbar-burger is-active";
  } else {
      burger.className = "navbar-burger";
  }

  }

  
  
  }

}




