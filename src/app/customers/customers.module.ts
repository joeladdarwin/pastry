import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { FlavoursComponent } from './flavours/flavours.component';
import { MenuComponent } from './menu/menu.component';
import { ImageComponent } from './image/image.component';
import { AvailablityService } from '../services/availablity.service';


@NgModule({
  declarations: [CustomersComponent, FlavoursComponent, MenuComponent, ImageComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[AvailablityService]
})
export class CustomersModule { }
