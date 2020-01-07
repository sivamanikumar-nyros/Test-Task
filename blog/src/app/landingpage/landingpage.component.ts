import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router) { }
  public imagesUrl;
  Display = true;
  ngOnInit() {
  	this.imagesUrl = [
    	"assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
      "assets/images/Article.jpeg",
    	// "assets/images/GlobalArticles.png",
    	// 'http://tineye.com/images/widgets/mona.jpg',
    	// "assets/images/EditArticle.png",
    	// "assets/images/NewArticle.png",
    	// "assets/images/SearchArticles.png",
    	// "assets/images/Signin.png",
    	// "assets/images/SignUp.png",
    	// "assets/images/tutor.png",
    	// "assets/images/YouFeed.png",

    ];
  }

}
