import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { HelloUserComponent } from './hello-user/hello-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginFormComponent,
    LogoutComponent,
    HelloUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
