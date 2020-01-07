import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public currentUser;
article = true;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
   	this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

   logout() {
    	this.authenticationService.logout();
    	this.router.navigate(['/login']);
	}

  // Home(){
  //   console.log('dfghjk');
  //   this.router.navigate(['LandingPageForArticles']);
  // }

  ngOnInit() {
    if (localStorage.getItem('currentuser')){
      this.article = false
    }
  }

}