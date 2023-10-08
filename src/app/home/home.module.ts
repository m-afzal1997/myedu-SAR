import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, FormsModule],
  declarations: [MainComponent, SubscriptionComponent],
})
export class HomePageModule {}
