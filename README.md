# Nx-style monorepo using Angular CLI version 9

Two apps with shared features, composed using a feature shell library. Also
sharing an environment library.

## Steps to scaffold the workspace
1. Execute `ng new my-monorepo --strict --create-application=false`.
2. Change `newProjectRoot` option to `libs/shared` in `angular.json`.
3. Execute `ng generate application app1 --style=css --prefix=app1 --project-root=apps/app1 --routing=false`.
4. Execute `ng generate application app2 --style=css --prefix=app2 --project-root=apps/app2 --routing=false`.
5. Execute `ng generate library environment --entry-file=index --prefix=monorepo`.
6. Remove `environment:build` architect from `angular.json`.
7. Set up path mapping in `/tsconfig.json`:
  ```
  "paths": [
    "@monorepo/shared/environment": [
      "libs/shared/environment/src/index.ts"
    ]
  ]
  ```
8. Delete `package.json`, `ng-packagr.json`, component, service, and Angular
  module files from the `environment` library project.
9. Move the `environment.ts` and `environment.prod.ts` files to the
  `environments` library.
10. Expose the `environment` value in the public API of the `environments`
  library.
11. Update the `fileReplacements` options for `app1:build` and `app2:build` to
  the library paths.
12. Update the import statements in the `main.ts` files to
  `import { environment } from '@monorepo/shared/environment';`.
