import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { catchError } from 'rxjs/operators';

export class Issue {
  title: string;
  comments: number;
  number: number;
  state: string;
  pull_request: boolean;
  html_url: string;
}

@Injectable()

export class Service {
    protected url = 'https://api.github.com/repos/angular/angular.js/issues';
    constructor(private http: HttpClient) {  }

    getIssues(): Observable<Issue[]> {
        return this.http.get<Issue[]>(this.url);
    }
}
