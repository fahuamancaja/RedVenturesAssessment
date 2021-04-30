import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { LoyaltyprogramSelectionComponent } from './loyaltyprograms/loyaltyprogram-selection/loyaltyprogram-selection.component';
import { NavComponent } from './nav/nav.component';
import { LoyaltyprogramCardComponent } from './loyaltyprograms/loyaltyprogram-card/loyaltyprogram-card.component';
import { LoyaltyprogramDetailsComponent } from './loyaltyprograms/loyaltyprogram-details/loyaltyprogram-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoyaltyprogramSelectionComponent,
    NavComponent,
    LoyaltyprogramCardComponent,
    LoyaltyprogramDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
