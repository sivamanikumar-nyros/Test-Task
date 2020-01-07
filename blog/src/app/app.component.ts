import { Component, OnInit ,HostListener, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { HelloComponent } from './hello/hello.component';
import { Quizmodel } from './quiz/quizmodel';
import { Answermodel } from './quiz/quizmodel';
import { TechnologyComponent } from './technology/technology.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  header= true;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: Http
    // private activatedRoute: ActivatedRoute
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  

  // Click to Top Btn*****************

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}