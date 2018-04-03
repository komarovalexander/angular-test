import { TestBed, getTestBed, ComponentFixture, async } from '@angular/core/testing';
import { IssuesComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Service } from '../services/app.service';
import { IssuesTestData } from '../testData/issues';
import { MockService } from '../services/mock.service';

describe('IssuesComponent', () => {
  let fixture: ComponentFixture<IssuesComponent>;
  let app: any;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [
        IssuesComponent
      ]
    });
    TestBed.overrideComponent(IssuesComponent, {
      set: {
        providers: [{ provide: Service, useClass: MockService }]
      }
    });
    fixture = TestBed.createComponent(IssuesComponent);
    app = fixture.debugElement.componentInstance;
    element = fixture.nativeElement;
  }));

  it('create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`check issues`, async(() => {
    app.issues.subscribe(result => expect(result).toEqual(IssuesTestData.Items));
  }));
});


