import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridComponent } from './grid.component';

import { PlayService } from '../services/play.service';

describe('Grid component', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let playService: PlayService;

  beforeEach(async(() => {

    // Mocked play service
    const stubPlayService = {
      seed: [[{
        id: 'cellID',
        coordinates: {},
        isAlive: false
      }]],
      getSeed: function () {
        return this.seed;
      }
    };

    TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      providers: [{
        provide: PlayService,
        useValue: stubPlayService
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;

    // Getting injected service
    playService = fixture.debugElement.injector.get(PlayService);
  });

  it('should initialized seed to defined value', () => {
    fixture.detectChanges();
    expect(component.seed).toBeDefined();
  });

  it('should call change state when cell is pressed', () => {
    fixture.detectChanges();
    const cell = fixture.debugElement.queryAll(By.css('td'))[0].nativeElement as HTMLElement;
    cell.click();
    fixture.whenStable().then(() => {
      expect(component.changeState).toHaveBeenCalled();
    });
  });
});
