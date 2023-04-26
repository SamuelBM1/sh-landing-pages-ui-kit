import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetStartedComponent } from './get-started/get-started.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { IconsComponent } from './icons/icons.component';
import { InputsComponent } from './inputs/inputs.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    GetStartedComponent,
    ButtonsComponent,
    DialogsComponent,
    IconsComponent,
    InputsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    GetStartedComponent,
    ButtonsComponent,
    DialogsComponent,
    IconsComponent,
    InputsComponent,
    LoaderComponent
  ]
})
export class PagesModule { }
