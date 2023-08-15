import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TextComponent } from './text/text.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {
    path:"form",component:FormComponent
  },
  {
    path:"text",component:TextComponent
  },
  {
    path:"Temp",component:TempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
