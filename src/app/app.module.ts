import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TextComponent } from './text/text.component';
import { FormsModule } from '@angular/forms';
import { TempComponent } from './temp/temp.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TextComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
