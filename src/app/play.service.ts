import { Injectable } from '@angular/core';

import { INITIAL_SEED } from './seed';
import { _deepClone, _clear } from './utility';

@Injectable()
export class PlayService {
  seed = INITIAL_SEED;
  previousGenSeed: any[];

  ticker: any;
  tickerSpeed = 500;

  startAutoPlay() {
    this.ticker = setInterval(() => { this.processNextGen(); }, this.tickerSpeed);
  }

  stopAutoPlay() {
    clearInterval(this.ticker);
  }

  processNextGen() {
    // Taking a snapshot of seed and advancing to next gen
    this.previousGenSeed = _deepClone(this.seed);
    this.calculateNextGenSeed();
  }

  calculateNextGenSeed() {
    this.seed.forEach((row) => {
      row.forEach(cell => {
        cell.isAlive = this.shouldBeAlive(cell);
      });
    });
  }

  shouldBeAlive(cell): boolean {
    let shouldBeAlive = true;
    let aliveNeighbours = 0;

    // Getting neighbours via relative co-ordinates

    /**
     * Checking if x-1 row exists.
     * If exist, then checking whether y-1 and y+1 cell exists
     */
    if (this.previousGenSeed[cell.coordinates.x - 1] !== undefined) {
      if (this.previousGenSeed[cell.coordinates.x - 1][cell.coordinates.y].isAlive) {
        aliveNeighbours++;
      }

      if (this.previousGenSeed[cell.coordinates.x - 1][cell.coordinates.y - 1] !== undefined) {
        if (this.previousGenSeed[cell.coordinates.x - 1][cell.coordinates.y - 1].isAlive) {
          aliveNeighbours++;
        }
      }

      if (this.previousGenSeed[cell.coordinates.x - 1][cell.coordinates.y + 1] !== undefined) {
        if (this.previousGenSeed[cell.coordinates.x - 1][cell.coordinates.y + 1].isAlive) {
          aliveNeighbours++;
        }
      }

    }

    /**
     * Checking if x+1 row exists.
     * If exist, then checking whether y-1 and y+1 cell exists
     */
    if (this.previousGenSeed[cell.coordinates.x + 1] !== undefined) {
      if (this.previousGenSeed[cell.coordinates.x + 1][cell.coordinates.y].isAlive) {
        aliveNeighbours++;
      }
      if (this.previousGenSeed[cell.coordinates.x + 1][cell.coordinates.y - 1] !== undefined) {
        if (this.previousGenSeed[cell.coordinates.x + 1][cell.coordinates.y - 1].isAlive) {
          aliveNeighbours++;
        }
      }

      if (this.previousGenSeed[cell.coordinates.x + 1][cell.coordinates.y + 1] !== undefined) {
        if (this.previousGenSeed[cell.coordinates.x + 1][cell.coordinates.y + 1].isAlive) {
          aliveNeighbours++;
        }
      }

    }

    // Checking if y-1 cell exists for given x co-ordinates
    if (this.previousGenSeed[cell.coordinates.x][cell.coordinates.y - 1] !== undefined) {
      if (this.previousGenSeed[cell.coordinates.x][cell.coordinates.y - 1].isAlive) {
        aliveNeighbours++;
      }
    }

    // Checking if y+1 cell exists for given x co-ordinates
    if (this.previousGenSeed[cell.coordinates.x][cell.coordinates.y + 1] !== undefined) {
      if (this.previousGenSeed[cell.coordinates.x][cell.coordinates.y + 1].isAlive) {
        aliveNeighbours++;
      }
    }

    if (aliveNeighbours < 2 || aliveNeighbours > 3) {
      shouldBeAlive = false;
    }

    if (cell.isAlive === false && aliveNeighbours === 2) {
      shouldBeAlive = false;
    }

    return shouldBeAlive;
  }

  clearSeed() {
    _clear(this.seed);
  }

  // Getters and Setters

  getTickSpeed(): number {
    return this.tickerSpeed;
  }

  setTickSpeed(speed: number): void {
    this.tickerSpeed = speed;
  }

  setSeed(seed: any[]): void {
    this.seed = seed;
  }

  getSeed(): any[] {
    return this.seed;
  }

  getPreviousGenSeed(): any[] {
    return this.previousGenSeed;
  }

  setPreviousGenSeed(seed: any[]): void {
    this.previousGenSeed = seed;
  }
}
