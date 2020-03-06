import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedDataAccessModule } from '@monorepo/shared/data-access';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('@monorepo/shared/feature-search')
      .then(m => m.SharedFeatureSearchModule),
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    SharedDataAccessModule.forRoot(),
  ],
})
export class SharedFeatureShellLibraryModule {}
