import { Routes } from '@angular/router';

import { Privacy } from './pages/privacy/privacy';
import { Terms } from './pages/terms/terms';

export const LEGAL_ROUTES: Routes = [
  {
    path: 'terms',
    component: Terms,
    title: 'Términos de uso',
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'Política de privacidad',
  },
];
