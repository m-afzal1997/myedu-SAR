import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedRoutingModule
  ],
  exports: [CommonModule, IonicModule, HeaderComponent]
})
export class SharedModule { }
