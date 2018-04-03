import { TestBed, getTestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Service, Issue } from './app.service';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

const issues = [{
  title: 'issue 1',
  comments: 12,
  number: 1,
  state: 'open',
  pull_request: false,
  html_url: 'http://mycustomurl.com'
}];

export class MockService extends Service {
  protected url = 'https://api.github.com/repos/angular/angular.js/issues';

  getIssues(): Observable<Issue[]> {
      return of(issues);
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ]
    });
    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [{ provide: Service, useClass: MockService }]
      }
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    element = fixture.nativeElement;
  }));
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have an issue`, async(() => {
    fixture.detectChanges();
    app.issues.subscribe(result => expect(result).toEqual(issues));
  }));
});


