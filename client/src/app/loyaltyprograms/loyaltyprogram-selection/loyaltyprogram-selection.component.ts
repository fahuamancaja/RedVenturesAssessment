import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoyaltyProgram } from 'src/app/_models/loyaltyprograms';
import { LoyaltyprogramsService } from 'src/app/_services/loyaltyprograms.service';

@Component({
  selector: 'app-loyaltyprogram-selection',
  templateUrl: './loyaltyprogram-selection.component.html',
  styleUrls: ['./loyaltyprogram-selection.component.css']
})
export class LoyaltyprogramSelectionComponent implements OnInit {
  loyaltyPrograms$: Observable<LoyaltyProgram[]>;

  constructor(private loyaltyprogramService: LoyaltyprogramsService) { }

  ngOnInit(): void {
    this.loyaltyPrograms$ = this.loyaltyprogramService.getLoyaltyPrograms();
  }

}
