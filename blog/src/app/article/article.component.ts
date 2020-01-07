// import { Component, OnInit } from '@angular/core';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import {Http, Response, Headers} from '@angular/http';
// @Component({
//   selector: 'app-article',
//   templateUrl: './article.component.html',
//   styleUrls: ['./article.component.css']
// })
// export class ArticleComponent implements OnInit {

//   angForm: FormGroup;
//   constructor(private fb: FormBuilder, private http: Http) {
//     this.createForm();
//   }

//   createForm() {
//     this.angForm = this.fb.group({
//       person_name: ['', Validators.required ],
//       business_name: ['', Validators.required ],
//       business_gst_number: ['', Validators.required ]
//     });
//   }

//   ngOnInit() {
//   }

// }




import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
public currentUser;
  constructor(private http: Http,private router: Router ,private formBuilder: FormBuilder ) {
    this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }
  articleForm: FormGroup;
  submitted = false;
  isAdded: boolean = false;

  articleObj: object = {};


  // addNewArticle = function(article){
  //   this.articleObj = {
  //     "name": article.name,
  //     "description": article.description,
  //     "author":  this.currentUser.firstName,
  //   }
  //   console.log(this.articleObj)
  //   this.http.post("http://10.90.90.117:5555/articles/", this.articleObj).subscribe((res: Response)=>{
  //     console.log(res);
  //     console.log(article.currentUser);
  //     this.isAdded = true;
  //   })
  //     this.router.navigate(['/']);
  // }

  get fval() { return this.articleForm.controls; }
  addNewArticle(){
    this.submitted = true;
    if(this.articleForm.invalid){
      console.log('failed')
      return;
      // console.log('failed')

    }else{
      console.log('success')
      this.articleObj = {
      "name": this.articleForm.controls['name'].value,
      "description": this.articleForm.controls['description'].value,
      "author":  this.currentUser.firstName,
    }
    console.log(this.articleObj)
    this.http.post("http://10.90.90.117:5555/articles/", this.articleObj).subscribe((res: Response)=>{
      console.log(res);
      // console.log(article.currentUser);
      this.isAdded = true;
    })
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      name:['', Validators.required],
      description:['', Validators.required]
    })
  }

}