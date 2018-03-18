import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsoleModule } from './console/console.module';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountModule } from './account/account.module';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent }
    ]),
    ConsoleModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
