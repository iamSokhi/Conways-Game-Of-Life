import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls.component';
import { GridComponent } from './grid.component';
import { TipComponent } from './tip.component';

import { PlayService } from './play.service';

import { INITIAL_SEED } from './seed';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ControlsComponent,
        GridComponent,
        TipComponent
      ],
      providers: [
        PlayService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Conway\'s Game Of Life'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Conway\'s Game Of Life');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Conway\'s Game Of Life');
  }));
});
