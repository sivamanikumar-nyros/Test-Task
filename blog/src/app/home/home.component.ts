import { Component, OnInit , HostListener, ElementRef } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RatingModule} from "ngx-rating";
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { NgVoteModule } from 'ng-vote';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  currentUser;
  sortingResult = false;
  filteredArticles = [];
  articles = [];
  comment = {};
  UserComments = [];
  id:number;
  share_btn:string = "";
  info: string = "";
  
  private _searchTerm: string;
  
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) {
  }

  addNewArticleComment = function(article, article_id){

    console.log(article, article_id, this.currentUser.firstName)
    this.comment = {
      comment: article.comment,
      article_id: article_id,
      user_id: this.currentUser.firstName
    }
    this.http.post("http://10.90.90.117:5555/articleComments/", this.comment).subscribe((res: Response)=>{
      console.log(res);
    this.getComments()  
      
    })
    this.fetchData();
    // this.getComments()  

  }

  deleteArticle = function(id){
    if(confirm('Are you sure?')){
      const url = `${"http://10.90.90.117:5555/articles"}/${id}`;
      return this.http.delete(url, {headers: this.headers}).toPromise().then(() => {
        this.fetchData();
        
      })
    }
  }
  
  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchTerm(value: string){
    this._searchTerm = value;
    this.filteredArticles = this.filtereArticles(value);
  }

  filtereArticles(searchString: string){
    return this.articles.filter(article =>
      article.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }

  fetchData = function(){
  	this.http.get("http://10.90.90.117:5555/articles").subscribe(
  		(res: Response) => {
  			this.articles = res.json();
        this.sortingResult = true;
        console.log(this.articles)
        if(this.sortingResult){
          this.filteredArticles = this.articles;
        }

  		}
  	)
  }

  voteConfig: {
    cssClass: 'my-class',
    allowEdit: true, 
    disabled: false
  }

  votes: 123 // total amount of votes
  selectedVote: 0 // not voted yet

  onVote(vote) {
    console.log('onVote response: ', vote)
  }

  getComments(){
    this.http.get("http://10.90.90.117:5555/articleComments").subscribe(
      (res: Response) => {
        this.UserComments = res.json();
        console.log(this.UserComments)

      }
    )
  }

  share(article){
    alert("Your post is shared locally");
    console.log("testing share button id:",article.id);
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    this.share_btn = this.currentUser.firstName;

  }
  
  ngOnInit() {
  	this.fetchData();  
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    this.getComments();
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