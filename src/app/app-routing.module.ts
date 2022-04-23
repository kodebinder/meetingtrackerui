import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { ListMeetingsComponent } from './component/list-meetings/list-meetings.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { RouteGuardService } from './service/guard/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:username', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'meetings', component: ListMeetingsComponent, canActivate: [RouteGuardService] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
