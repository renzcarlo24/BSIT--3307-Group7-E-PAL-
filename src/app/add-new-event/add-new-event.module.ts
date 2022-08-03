import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewEventPageRoutingModule } from './add-new-event-routing.module';

import { AddNewEventPage } from './add-new-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewEventPageRoutingModule
  ],
  declarations: [AddNewEventPage]
})
export class AddNewEventPageModule {}
