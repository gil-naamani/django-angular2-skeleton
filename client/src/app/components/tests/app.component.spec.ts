import { TestBed, async } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import { HelloWorldService } from '../../services/hello-world.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        HelloWorldService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
