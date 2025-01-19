import { NgModule } from '@angular/core';
import { counterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
  ],
  imports: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class CounterModule { }
