import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/home/login/login.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { ForgotpasswordComponent } from './modules/home/forgotpassword/forgotpassword.component';
import { IndexComponent } from './modules/home/index/index.component';
import { EventsComponent } from './modules/user/events/events.component';
import { HomeHeaderComponent } from './core/home-header/home-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    IndexComponent,
    EventsComponent,
    HomeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
