import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedNgrxStoreModule } from './shared-ngrx-store.module';

@NgModule({
  imports: [SharedNgrxStoreModule],
})
export class SharedDataAccessRootModule

@NgModule({})
export class SharedDataAccessModule {
  static forRoot(): ModuleWithProviders<SharedDataAccessRootModule> {
    return {
      ngModule: SharedDataAccessRootModule
    };
  }
}
