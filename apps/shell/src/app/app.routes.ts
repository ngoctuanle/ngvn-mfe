import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { WebElementWrapperComponent, WebElementWrapperOptions } from '@ngvn-mfe/angular/web-element-wrapper';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('home/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'contact',
    component: WebElementWrapperComponent,
    data: {
      loadRemoteBundle: () => import('contact/Module'),
      selector: 'app-react-contact'
    } as WebElementWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
