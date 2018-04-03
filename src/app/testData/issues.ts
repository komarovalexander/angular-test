import { Issue } from '../models/issue';
import { Comment } from '../models/comment';
export class IssuesTestData {
  public static Items: Issue[] = [{
    title: 'issue 1',
    body: '',
    comments: 12,
    number: 1,
    state: 'open',
    pull_request: false,
    html_url: 'http://mycustomurl.com',
    user: {
      login: '',
      avatar_url: ''
    }
  }, {
    title: 'issue 2',
    body: '',
    comments: 0,
    number: 2,
    state: 'open',
    pull_request: false,
    html_url: 'http://mycustomurl.com',
    user: {
      login: '',
      avatar_url: ''
    }
  }];

  public static Comments: Comment[] = [{
    body: 'custom text',
    user: {
      login: '',
      avatar_url: ''
    }
  }];
}
