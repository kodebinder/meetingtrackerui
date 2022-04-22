import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './component/error/error.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListMeetingsComponent } from './component/list-meetings/list-meetings.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FeedbackComponent } from './component/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FeedbackComponent,
    FooterComponent,
    ListMeetingsComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
