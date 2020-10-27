export const environment = {
  production: true,
  keycloak: {
    realm: 'jobclub',
    clientId: 'client-app',
    authLink:  'https://jobclub-ui.herokuapp.com/auth',
    loginRedirectLink: 'https://jobclub-ui.herokuapp.com',
    registerRedirectLink: 'https://jobclub-ui.herokuapp.com',
    logoutRedirectLink: 'https://jobclub-ui.herokuapp.com'
  },
  meetingService: {
    profileUrl: 'https://jobclub-meeting.herokuapp.com/profile'
  }
};
