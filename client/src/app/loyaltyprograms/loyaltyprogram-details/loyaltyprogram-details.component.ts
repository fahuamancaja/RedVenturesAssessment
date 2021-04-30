import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoyaltyProgram } from 'src/app/_models/loyaltyprograms';
import { PointModel } from 'src/app/_models/pointmodel';
import { LoyaltyprogramsService } from 'src/app/_services/loyaltyprograms.service';

@Component({
  selector: 'app-loyaltyprogram-details',
  templateUrl: './loyaltyprogram-details.component.html',
  styleUrls: ['./loyaltyprogram-details.component.css']
})
export class LoyaltyprogramDetailsComponent implements OnInit {
  loyaltyProgram: LoyaltyProgram;
  pointModel: PointModel = new PointModel();
  fee:string = "5.60";
  points_price = 0;
  choosepayment:boolean = false;
  choosecash:boolean = false;

  constructor(private loyaltyprogramService: LoyaltyprogramsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadLoyaltyProgram();

  }

  loadLoyaltyProgram() {
    this.loyaltyprogramService.getLoyaltyProgram(this.route.snapshot.paramMap.get('pointId')).subscribe(lp =>{
      this.loyaltyProgram = lp;
    })
  }

  updatePoints() {
    let valuation = Number(this.loyaltyProgram.tpg_valuation);
    this.points_price = this.pointModel.number_of_points * valuation + Number(this.fee);
    if (this.pointModel.ticket_cost > this.points_price) {
      this.choosepayment = true;
      this.choosecash = false;
    }
    else{
      this.choosepayment = true;
      this.choosecash = true;
    };
  }


}
