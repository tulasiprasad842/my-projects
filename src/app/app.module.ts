import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { DemoMaterialModule } from './material';
import { MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ValidformsComponent } from './validforms/validforms.component';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { StudentformComponent } from './studentform/studentform.component';
// import { StepperComponent } from './stepper/stepper.component';
// import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    FormsComponent,
    ValidformsComponent,
    DatepickerComponent,
    StudentformComponent,
    // StepperComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatExpansionModule,
    NgxPasswordToggleModule,
    // MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
