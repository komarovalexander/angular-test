import { User } from './user';

export class Issue {
  title: string;
  body: string;
  comments: number;
  number: number;
  state: string;
  pull_request: boolean;
  html_url: string;
  user: User;
}
