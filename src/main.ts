import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Enables HMR
declare var module: any;
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
