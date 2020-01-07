import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

/**Componenets */
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UserArticleComponent } from './user-article/user-article.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelloComponent } from './hello/hello.component';
import { TechnologyComponent } from './technology/technology.component';
import { CarsComponent } from './cars/cars.component';
// import { EmployeeComponent } from './employee/employee.component';
import { ItemsComponent } from './items/items.component';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'LandingPageForArticles', 
    component: LandingpageComponent 
  },
  { 
    path: 'cars', 
    component: CarsComponent,canActivate: [AuthGuard]
  },
  { 
    path: 'TechnologyRelatedArticles', 
    component: TechnologyComponent ,canActivate: [AuthGuard]
  },
  { 
    path: 'header', 
    component: HeaderComponent 
  },
  { 
    path: 'item', 
    component: ItemsComponent 
  },
  { 
    path: 'quiz', 
    component: QuizComponent ,canActivate: [AuthGuard]
  },
  { 
    path: 'article', 
    component: ArticleComponent ,canActivate: [AuthGuard]
  },
  { 
    path: 'updateArticle/:id', 
    component: UpdateArticleComponent ,canActivate: [AuthGuard]
  },
  { 
    path: 'userArticle', 
    component: UserArticleComponent ,canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
