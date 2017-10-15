import { Component } from '@angular/core';

import { PlayService } from './play.service';

@Component({
  selector: 'app-controls',
  templateUrl: 'controls.component.html',
  styleUrls: ['./controls.component.css']
})

export class ControlsComponent {
  disabled = false;
  status = 'Start Auto Play';
  tickSpeed = this.playService.getTickSpeed();

  constructor(private playService: PlayService) {}

  changeStatus() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.status = 'Stop Auto Play';
      this.playService.startAutoPlay();
    } else {
      this.status = 'Start Auto Play';
      this.playService.stopAutoPlay();
    }
  }

  changeTickSpeed(speed): void {
    this.playService.setTickSpeed(parseInt(speed, 10));
  }

  clearSeed() {
    this.playService.clearSeed();
  }
}
