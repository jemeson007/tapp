import { Routes } from '@angular/router';
import { HFComponent } from './h-f/h-f.component';

export const ROUTES: Routes = [{
  path: '', component: HFComponent
  // pathMatch: 'full',
  // loadChildren: () => import('./modules/main/main.module')
  //   .then(m => m.MainModule).catch(e => console.error(e))
}];
