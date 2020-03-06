import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  SharedFeatureShellLibraryModule,
} from '@monorepo/shared/feature-shell-library';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedFeatureShellLibraryModule,
  ],
})
export class AppModule {}
