export const environment = {
  production: true,
  keycloak: {
    realm: 'jobclub',
    clientId: 'client-app',
    authLink:  'https://jobclub-ui.herokuapp.com/auth',
    redirectUrl: 'https://jobclub-ui.herokuapp.com'
  },
  meetingService: {
    profileUrl: 'https://jobclub-meeting.herokuapp.com/profile'
  }
};
