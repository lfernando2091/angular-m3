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

```
