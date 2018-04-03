import { Component } from '@angular/core';
import { Service } from '../services/app.service';
import { Issue } from '../models/issue';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs/observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class IssueComponent {
  issue: Issue;
  comments: Observable<Comment[]>;
  loadingMessage: string;

  constructor(service: Service, private route: ActivatedRoute) {
    this.loadingMessage = "Loading..";
    this.route.params.subscribe(params => {
      let issueNumber = params['number'];

      service.getIssue(issueNumber).subscribe(data => {
        this.issue = data;

        if(data.comments > 0){
          this.loadingMessage = "Loading comments";
          this.comments = service.getComments(issueNumber);
          this.comments.subscribe(data => {
            this.loadingMessage = "";
          });
        } else {
          this.loadingMessage = "";
        }
      });
   });
  }
}
