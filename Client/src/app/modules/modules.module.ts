import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    ModulesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    NgxSpinnerModule
    
  ]
})
export class ModulesModule { }
