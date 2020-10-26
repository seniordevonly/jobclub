```
export function initializeKeycloak(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: environment.keycloak.authLink,
            realm: environment.keycloak.realm,
            clientId: environment.keycloak.clientId
          },
          bearerExcludedUrls: ['/assets', '/clients/public'],
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri:
              window.location.origin + '/assets/silent-check-sso.html',
          },
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
```


```
function initializeKeycloak(keycloak: KeycloakService): any {
  const options: KeycloakOptions = {
    config: {
      url: 'http://localhost:8180/auth',
      realm: 'jobbstien',
      clientId: 'client-app'
    },
    bearerExcludedUrls: ['/assets', '/clients/public'],
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
    },
  };

  return () => keycloak.init(options);
}
```
