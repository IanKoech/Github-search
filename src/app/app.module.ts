import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { ProfileComponent } from './profile/profile.component';
import {ProfileServiceService} from '../app/profile-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DateCountPipe } from './date-count.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    ProfileComponent,
    NotFoundComponent,
    UserInfoComponent,
    DateCountPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
