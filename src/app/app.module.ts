import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/app.component';
import { IssueComponent } from './issue/app.component';
import { RoutingModule } from './app.routing.module';
import { MarkdownModule } from 'angular2-markdown';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueComponent
  ],
  imports: [
    HttpClientModule,
    MarkdownModule,
    BrowserModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
