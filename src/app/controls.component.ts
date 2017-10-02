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

  clearSeed() {
    this.playService.clearSeed();
  }
}
