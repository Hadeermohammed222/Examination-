import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import{AdmainComponent} from './Component/admain/admain.component';
import { AboutComponent } from './Component/about/about.component';
import {ExamComponent} from './Component/exam/exam.component';
import { ResultsComponent } from './Component/results/results.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'exam', component: ExamComponent, canActivate: [AuthGuard] },
  {path: 'admain', component: AdmainComponent },
  {path:'results',component:ResultsComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
