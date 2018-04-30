import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicInfoPage } from './basic-info';

@NgModule({
  declarations: [
    BasicInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicInfoPage),
  ],
})
export class BasicInfoPageModule {}
