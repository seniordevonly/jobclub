export const environment = {
  production: true,
  keycloak: {
    realm: 'jobclub',
    clientId: 'client-app',
    authLink:  'https://jobclub-ui.herokuapp.com/auth',
    redirectUrl: 'https://jobclub-ui.herokuapp.com'
  },
  services: {
    meeting: {
      baseUrl: 'https://jobclub-meeting.herokuapp.com/profile'
    }
  }
};
