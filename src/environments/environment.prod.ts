export const environment = {
  production: true,
  keycloak: {
    realm: 'jobbstien',
    clientId: 'client-app',
    authLink:  'https://jobclub-ui.herokuapp.com/auth',
    loginRedirectLink: 'https://jobclub-ui.herokuapp.com',
    registerRedirectLink: 'https://jobclub-ui.herokuapp.com',
    logoutRedirectLink: 'https://jobclub-ui.herokuapp.com'
  }
};
