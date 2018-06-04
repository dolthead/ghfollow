import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    FollowerListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
