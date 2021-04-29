import { Component, Input, OnInit } from '@angular/core';
import { LoyaltyProgram } from 'src/app/_models/loyaltyprograms';

@Component({
  selector: 'app-loyaltyprogram-card',
  templateUrl: './loyaltyprogram-card.component.html',
  styleUrls: ['./loyaltyprogram-card.component.css']
})
export class LoyaltyprogramCardComponent implements OnInit {
  @Input() loyaltyprogram: LoyaltyProgram;

  constructor() { }

  ngOnInit(): void {
  }

}
