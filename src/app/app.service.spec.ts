import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Service } from './app.service';

describe('Service', () => {
  let injector: TestBed;
  let service: Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Service]
    });
    injector = getTestBed();
    service = injector.get(Service);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<Issue[]>', () => {
    const dummyIssues = [{
      title: 'issue 1',
      comments: 12,
      number: 1,
      state: 'open',
      pull_request: false,
      html_url: 'http://mycustomurl.com'
    }];

    service.getIssues().subscribe(issues => {
      expect(issues).toEqual(dummyIssues);
    });

    const req = httpMock.expectOne('https://api.github.com/repos/angular/angular.js/issues');
    expect(req.request.method).toBe('GET');
    req.flush(dummyIssues);
  });
});

