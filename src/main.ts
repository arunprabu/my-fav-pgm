//Node Module Imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Custom Imports
import { AppModule } from './app/app.module';   /// Step 2- What's Module?
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Step2:  Every angular app should be kickstarted with a module
platformBrowserDynamic().bootstrapModule(AppModule)  
  .catch(err => console.error(err));
