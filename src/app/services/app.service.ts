import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Issue } from '../models/issue';
import { Comment } from '../models/comment';

@Injectable()

export class Service {
  protected url = 'https://api.github.com/repos/angular/angular.js/issues';
  constructor(private http: HttpClient) {  }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.url);
  }

  getIssue(number: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.url}/${number}`);
  }

  getComments(issueNumber: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/${issueNumber}/comments`);
  }
}
