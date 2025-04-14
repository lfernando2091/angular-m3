```txt

npx --package @angular/cli@15 ng new my-angular-app --no-create-application

ng generate application main-ui
ng generate library auth --project-root=projects/libs/auth
ng generate application reports-ui --project-root=projects/mfe/reports-ui

ng add angular-eslint
ng g angular-eslint:add-eslint-to-project main-ui
ng g angular-eslint:add-eslint-to-project auth
ng g angular-eslint:add-eslint-to-project reports-ui

ng g config karma --project=main-ui
ng g config karma --project=reports-ui

npm i -D @angular-devkit/architect

ng add @angular-architects/module-federation@15 --project main-ui --type host --port 4200
ng add @angular-architects/module-federation@15 --project reports-ui --type remote --port 4201

ng g m pages --project reports-ui --routing

ng add @angular/material --project main-ui

```
