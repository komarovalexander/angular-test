import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Service } from './app.service';
import { IssuesTestData } from '../testData/issues';

describe('Service', () => {
  let injector: TestBed;
  let service: Service;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [Service]
    });
    injector = getTestBed();
    service = injector.get(Service);
    httpMock = injector.get(HttpTestingController);
  });

  it('getIssues', () => {
    service.getIssues().subscribe(issues => {
      expect(issues).toEqual(IssuesTestData.Items);
    });

    const req = httpMock.expectOne('https://api.github.com/repos/angular/angular.js/issues');
    expect(req.request.method).toBe('GET');
    req.flush(IssuesTestData.Items);
  });

  it('getIssue', () => {
    service.getIssue(1).subscribe(issues => { });;
    const req = httpMock.expectOne('https://api.github.com/repos/angular/angular.js/issues/1');
    expect(req.request.method).toBe('GET');
  });

  it('getComments', () => {
    service.getComments(1).subscribe(issues => { });;
    const req = httpMock.expectOne('https://api.github.com/repos/angular/angular.js/issues/1/comments');
    expect(req.request.method).toBe('GET');
  });
});

