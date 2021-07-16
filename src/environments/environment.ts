// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    host: 'http://localhost:8000/',
    client_id: 'xEpUtiGXfGDD2slKdkkDGmkZAryBT98foLei0ySD',
    client_secret: '8dVhcyLLxB4kmRxcy1bzvR7svQ0rrD79nEZ6j906TFp8nVo9uhj9eiFhYUMEm9slbylv3RCaiEBa2m1ZlZotLhrairPasDrP9MUpqN8bbhqP1jqsdJHZr6YEpdLJ64iL'
  }
};

export const apiKaran = {
  registerNat: 'https://apikaran.herokuapp.com/auth/register/natural/',
  registerJur: 'https://apikaran.herokuapp.com/auth/register/juridico/',
  loginAuth: 'https://apikaran.herokuapp.com/auth/login/',

}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
