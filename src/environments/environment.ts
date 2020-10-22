// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  signatureEndpoint: 'https://podium-zoom-api.herokuapp.com/',
  apiKey: 'Obw9sB4VRAmsO5sWdiVHuw',
  meetingNumber: 94425276010,
  role: 0,
  leaveUrl: 'http://localhost:4200',
  userName: 'Angular',
  userEmail: '',
  passWord: 'BW0QzC',
  okta: {
    clientId: '${process.env.CLIENT_ID}',
    issuer: '${process.env.ISSUER}',
    disableHttpsCheck: '${process.env.TESTING_DISABLEHTTPSCHECK}',
    redirectUri: 'http://localhost:4200/login/callback',
    resourceServer: {
      messagesUrl: 'http://localhost:8080/api/messages'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
