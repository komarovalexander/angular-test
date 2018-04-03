import { TestBed, getTestBed, ComponentFixture, async } from '@angular/core/testing';
import { IssueComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'angular2-markdown';
import { Service } from '../services/app.service';
import { IssuesTestData } from '../testData/issues';
import { MockService } from '../services/mock.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Params } from '@angular/router';

describe('IssueComponent', () => {
  let fixture: ComponentFixture<IssueComponent>;
  let app: any;
  let element: any;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MarkdownModule],
      declarations: [
        IssueComponent
      ]
    });
    TestBed.overrideComponent(IssueComponent, {
      set: {
        providers: [
            { provide: Service, useClass: MockService },
            { provide: ActivatedRoute, useValue: { params: params } }
        ]
      }
    });
    fixture = TestBed.createComponent(IssueComponent);
    app = fixture.debugElement.componentInstance;
    element = fixture.nativeElement;
  }));

  it('check issue', async(() => {
    params.next({'number': '1'});
    fixture.detectChanges();
    expect(app.issue).toEqual(IssuesTestData.Items[0]);
  }));

  it(`check comments`, async(() => {
    params.next({'number': '1'});
    fixture.detectChanges();
    app.comments.subscribe(result => expect(result).toEqual(IssuesTestData.Comments));
  }));

  it(`check issue without comments`, async(() => {
    params.next({'number': '2'});
    fixture.detectChanges();
    expect(app.issue).toEqual(IssuesTestData.Items[1]);
    expect(app.comments).toEqual(undefined);
  }));
});


