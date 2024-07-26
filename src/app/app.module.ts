import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Component/home/home.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AboutComponent } from './Component/about/about.component';
import {AuthService} from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AdmainComponent } from './Component/admain/admain.component';
import { FormsModule } from '@angular/forms';
import { ExamComponent } from './Component/exam/exam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './Component/results/results.component';
@NgModule
({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ExamComponent,
    AdmainComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
