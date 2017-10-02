import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ControlsComponent } from './controls.component';

import { PlayService } from './play.service';

describe('Controls component', () => {
  let component: ControlsComponent;
  let fixture: ComponentFixture<ControlsComponent>;
  let playService: PlayService;

  const stubPlayService = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ControlsComponent
      ],
      providers: [{
        provide: PlayService,
        useValue: stubPlayService
      }]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ControlsComponent);
      component = fixture.debugElement.componentInstance; // Creating test instance for Controls Component
      // Play service being injected into component in question
      playService = fixture.debugElement.injector.get(PlayService);
    });
  }));

  it('should display \'Start Auto Play\' as original status after initialization', () => {
    fixture.detectChanges();
    const status = 'Start Auto Play'; // Creating mocked original status
    expect(component.status).toContain(status);
  });

  it('should make disabled property to false after initialization', () => {
    fixture.detectChanges();
    expect(component.disabled).toBeFalsy();
  });

  it('should render auto play button with \' Start Auto Play \' content', () => {
    fixture.detectChanges();
    const autoPlayBtn = fixture.debugElement.query(By.css('#autoPlay')).nativeElement as HTMLElement;
    expect(autoPlayBtn.textContent).toContain('Start Auto Play');
  });

  it('should clear seed when user press new button', async(() => {
    spyOn(component, 'clearSeed');
    const newBtn = fixture.debugElement.query(By.css('#clear')).nativeElement as HTMLElement;
    fixture.detectChanges();
    newBtn.click();
    fixture.whenStable().then(() => {
      expect(component.clearSeed).toHaveBeenCalled();
    });
  }));

  it('should call changeStatus when user press auto play button', () => {
    spyOn(component, 'changeStatus');
    const autoPlayBtn = fixture.debugElement.query(By.css('#autoPlay')).nativeElement as HTMLElement;
    fixture.detectChanges();
    autoPlayBtn.click();
    fixture.whenStable().then(() => {
      expect(component.changeStatus).toHaveBeenCalled();
      expect(component.changeStatus).toHaveBeenCalledTimes(1);
    });
  });

  it('should toggle disabled state and change status text content', async(() => {
    const autoPlayBtn = fixture.debugElement.query(By.css('#autoPlay')).nativeElement as HTMLElement;
    autoPlayBtn.click();
    fixture.detectChanges();
    fixture.whenRenderingDone().then(() => {
      expect(component.disabled).toBeTruthy();
      expect(component.status).toBe('Stop Auto Play');
    });
  }));
});
