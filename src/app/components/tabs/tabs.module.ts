import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [TabsComponent]
})
export class TabsModule {}
