import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4d41eeab0172c55b58d2cf288dc19c4e@o4507978693083136.ingest.de.sentry.io/4507978698588240",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});