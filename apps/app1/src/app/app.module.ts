import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  SharedFeatureShellModule,
} from '@monorepo/shared/feature-shell';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedFeatureShellModule,
  ],
})
export class AppModule {}
