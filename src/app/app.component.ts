import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  		  <a routerLink="/register">Register</a>
  	          <a routerLink="/participants">List of participants</a>
     		 <router-outlet></router-outlet>`,
})
export class AppComponent  { title = 'International Conference'; }
