import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
// services
import { InterceptorService } from './_services/interceptor.service';
import { UserService } from './_services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UserArticleComponent } from './user-article/user-article.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RatingModule} from 'ngx-rating';
import { NgVoteModule } from 'ng-vote';
import { ReadMoreDirective } from './read-more.directive';
// import {NgbModule,NgbPaginationModule, 
//      NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { HelloComponent } from './hello/hello.component';
import { SliderModule } from 'angular-image-slider';
import { TechnologyComponent } from './technology/technology.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { CarsComponent } from './cars/cars.component';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DialogModule} from 'primeng/dialog';
import { OnlyNumber } from './onlynumber.directive';
import { ItemsComponent } from './items/items.component';
// import { EmployeeComponent } from './employee/employee.component';
// import {CarouselModule} from 'primeng/carousel';
// import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
// import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    ArticleComponent,
    UpdateArticleComponent,
    UserArticleComponent,
    ReadMoreDirective,
    LandingpageComponent,
    FooterComponent,
    QuizComponent,
    HelloComponent,
    TechnologyComponent,
    CarsComponent,
    OnlyNumber,
    ItemsComponent,
    // EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    RatingModule,
     NgVoteModule,
     NgbModule,
     NgxPaginationModule,
       SliderModule,
       MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    PaginatorModule,
    DataViewModule,
    Ng2SearchPipeModule,
    DialogModule,
    // NgxSmartModalModule,
     // NgbPaginationModule, 
     // NgbAlertModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [UserService,{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }], //
  bootstrap: [AppComponent]
})
export class AppModule { }
