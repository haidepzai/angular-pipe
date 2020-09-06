import { Component } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
    <h2>Power Boost Calculator</h2>
    <div>Normal power: <input [(ngModel)]="power"></div>
    <div>Boost factor: <input [(ngModel)]="factor"></div>
    <p>
      Super Hero Power: {{power | exponentialStrength: factor}}
    </p>
  `
})
export class PowerBoostCalculatorComponent {
  power = 5;
  factor = 1;

  num2:number = Math.pow(3, 10);
}

/*
Alternative:

<h2>Power Boost Calculator</h2>
    <div>Normal power: <input #box1 (keyup)="0"></div>
    <div>Boost factor: <input #box2 (keyup)="0"></div>
    <p>
      Super Hero Power: {{box1.value | exponentialStrength: box2.value}}
    </p>

    */


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/