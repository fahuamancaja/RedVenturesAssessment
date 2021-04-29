import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoyaltyprogramDetailsComponent } from './loyaltyprograms/loyaltyprogram-details/loyaltyprogram-details.component';
import { LoyaltyprogramSelectionComponent } from './loyaltyprograms/loyaltyprogram-selection/loyaltyprogram-selection.component';

const routes: Routes = [
  {path: '', component: LoyaltyprogramSelectionComponent},
  {path: 'points', component: LoyaltyprogramSelectionComponent},
  {path: 'points/:pointId', component: LoyaltyprogramDetailsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
