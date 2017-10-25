import { Component, OnInit } from '@angular/core';

import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})

export class GridComponent implements OnInit {
  seed: any[];
  constructor(private playService: PlayService) {}
  ngOnInit() {
    // Leveraging pass by ref technique
    this.seed = this.playService.getSeed();
  }

  changeState(cell) {
    cell.isAlive = !cell.isAlive;
  }
}
