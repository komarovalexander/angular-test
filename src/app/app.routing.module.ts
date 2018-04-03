import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IssueComponent } from './issue/app.component';
import { IssuesComponent } from './issues/app.component';

const routes: Routes = [
  { path: 'issues',  component: IssuesComponent },
  { path: '',   redirectTo: '/issues', pathMatch: 'full' },
  { path: 'issues/:number', component: IssueComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
