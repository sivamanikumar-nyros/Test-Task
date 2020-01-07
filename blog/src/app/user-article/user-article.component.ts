import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {RatingModule} from "ngx-rating";
@Component({
  selector: 'app-user-article',
  templateUrl: './user-article.component.html',
  styleUrls: ['./user-article.component.css']
})
export class UserArticleComponent implements OnInit {

  public currentUser;
  articles = [];

  constructor(private http: Http) {
  	this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  id:number;

  private headers = new Headers({'Content-Type': 'application/json'});

  

  fetchData = function(){
  	this.http.get("http://10.90.90.117:5555/articles").subscribe(
  		(res: Response) => {
  			this.articles = res.json();
        console.log(this.articles)

  		}
  	)
  }

  deleteArticle = function(id){
  	if(confirm('Are you sure?')){
  		const url = `${"http://10.90.90.117:5555/articles"}/${id}`;
  		return this.http.delete(url, {headers: this.headers}).toPromise().then(() => {
  			this.fetchData();
        
  		})
  	}
  }



  ngOnInit() {
  	this.fetchData();
  }

}