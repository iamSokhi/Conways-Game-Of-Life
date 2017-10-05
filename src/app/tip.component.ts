import { Component } from '@angular/core';

@Component({
  selector: 'app-tip',
  template: `
    <p class="text-primary"><i>{{tip}}</i></p>
  `,
  styles: [`
    p {
      margin: 0;
      padding: 10px 0;
      font-size: small;
    }
  `]
})
export class TipComponent {
  tip = 'Tip: users can maually click cells to create their own pattern;';
}
