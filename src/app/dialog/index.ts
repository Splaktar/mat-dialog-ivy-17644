import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogComponent} from './component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialogComponent
  ],
  exports: [
    DialogComponent
  ]
})

class DialogModule {
}

export {
  DialogComponent,
  DialogModule
};
