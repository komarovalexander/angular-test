import { Component } from '@angular/core';
import { Service, Issue } from './app.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  service: Service;
  issues: Observable<Issue[]>;

  constructor(service: Service) {
      this.service = service;
      this.issues = service.getIssues();
  }
}
