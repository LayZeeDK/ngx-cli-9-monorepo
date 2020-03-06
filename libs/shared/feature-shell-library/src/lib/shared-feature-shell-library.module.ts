import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDataAccessModule } from '@monorepo/shared/data-access';

const routes: Routes = [];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    SharedDataAccessModule.forRoot(),
  ],
})
export class SharedFeatureShellLibraryModule {}
