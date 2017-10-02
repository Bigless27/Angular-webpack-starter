import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
  module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppModule);
