import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoyaltyProgram } from 'src/app/_models/loyaltyprograms';
import { LoyaltyprogramsService } from 'src/app/_services/loyaltyprograms.service';

@Component({
  selector: 'app-loyaltyprogram-details',
  templateUrl: './loyaltyprogram-details.component.html',
  styleUrls: ['./loyaltyprogram-details.component.css']
})
export class LoyaltyprogramDetailsComponent implements OnInit {
  loyaltyProgram: LoyaltyProgram;

  constructor(private loyaltyprogramService: LoyaltyprogramsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadLoyaltyProgram();
  }

  loadLoyaltyProgram() {
    this.loyaltyprogramService.getLoyaltyProgram(this.route.snapshot.paramMap.get('pointId')).subscribe(lp =>{
      this.loyaltyProgram = lp;
    })
  }

}
