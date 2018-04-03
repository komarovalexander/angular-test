import { Issue } from '../models/issue';
import { Comment } from '../models/comment';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { IssuesTestData } from '../testData/issues';

export class MockService {
  protected url = 'https://api.github.com/repos/angular/angular.js/issues';

  getIssues(): Observable<Issue[]> {
      return of(IssuesTestData.Items);
  }

  getIssue(number: number): Observable<Issue> {
    return of(IssuesTestData.Items.filter(item => item.number == number)[0]);
  }

  getComments(issueNumber: number): Observable<Comment[]> {
    return of(IssuesTestData.Comments);
  }
}
