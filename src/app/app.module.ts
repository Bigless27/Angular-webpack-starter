import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
