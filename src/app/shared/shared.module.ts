import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { SelectorComponent } from './components/selector/selector.component';


@NgModule({
  declarations: [HeaderComponent, InputComponent, SelectorComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedRoutingModule
  ],
  exports: [CommonModule, IonicModule, HeaderComponent, InputComponent, SelectorComponent]
})
export class SharedModule { }
