import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Import Vercel Analytics (handles both Web Analytics and Speed Insights)
import analytics from '@vercel/analytics';

bootstrapApplication(App, appConfig)
  .then(() => {
    // Initialize Vercel Analytics and Speed Insights
    // This works for any framework (Angular, Vue, Svelte, etc.)
    analytics.inject();
  })
  .catch((err) => console.error(err));
