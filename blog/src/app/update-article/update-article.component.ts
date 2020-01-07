import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
	id:number;
	public currentUser;
	data:object = {};
	articles = [];
	exist = false;
	articleObj:object = {};

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private router: Router , private route: ActivatedRoute, private http: Http) { 
  	this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  updateArticle(article) {
  	console.log(article.currentUser);
  	this.articleObj = {
  		"name": article.name,
  		"description": article.description,
  		"author":  this.currentUser.firstName
  	};

  	const url = `${"http://10.90.90.117:5555/articles"}/${this.id}`;
  	this.http.put(url, JSON.stringify(this.articleObj),{headers: this.headers}).toPromise().then(() => {
  		this.router.navigate(['/']);
  	})
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.id = +params['id'];
  	});
  	this.http.get("http://10.90.90.117:5555/articles",this.articleObj).subscribe(
  		(res: Response) => {

  			this.articles = res.json();
  			for(var i=0; i < this.articles.length; i++){
  				if(parseInt(this.articles[i].id) === this.id){
  					this.exist = true;
  					this.data = this.articles[i];
  					break;
          }else{
  					this.exist = false;
  				}
  			}
  		}
  	)
  }
}