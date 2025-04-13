import { Routes } from '@angular/router';

export const PLAYGROUND_ROUTES: Routes = [
  {
    path: 'reports-ui',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
  },
];
