import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConsoleComponent } from './main-console/main-console.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'console', component: MainConsoleComponent }
    ])
  ],
  declarations: [MainConsoleComponent]
})
export class ConsoleModule { }
