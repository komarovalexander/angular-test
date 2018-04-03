import { Component } from '@angular/core';
import { Service } from '../services/app.service';
import { Issue } from '../models/issue';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class IssuesComponent {
  service: Service;
  issues: Observable<Issue[]>;

  constructor(service: Service) {
    this.service = service;
    this.issues = service.getIssues();
  }
}
