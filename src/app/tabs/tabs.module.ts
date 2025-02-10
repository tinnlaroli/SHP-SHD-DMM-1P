<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
=======
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';
>>>>>>> f0a651d (Resolviendo conflicto en tabs-routing y tabs.module)
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [TabsComponent]
})
<<<<<<< HEAD
=======

>>>>>>> f0a651d (Resolviendo conflicto en tabs-routing y tabs.module)
export class TabsModule {}
