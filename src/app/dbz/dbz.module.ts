import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DbzListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent,
    DbzListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
