# Jobclub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To work with whereby locally

    $ ng serve --ssl true --host jobbstien.no --disable-host-check

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Tailwind

Setup instructions [angular-and-tailwindcss](https://medium.com/@jacobneterer/angular-and-tailwindcss-2388fb6e0bab)


    ng config projects.jobclub.architect.build.builder @angular-builders/custom-webpack:browser
    ng config projects.jobclub.architect.build.options.customWebpackConfig.path webpack.config.js
    ng config projects.jobclub.architect.serve.builder @angular-builders/custom-webpack:dev-server
    ng config projects.jobclub.architect.serve.options.customWebpackConfig.path webpack.config.js

## Zoom in Angular
[zoom-web-sdk-implementation-with-angular](https://medium.com/@akshayjadhav19710/zoom-web-sdk-implementation-with-angular-9a3bd1000839)

#### Create Zoom meeting
[create-a-zoom-meeting-using-zoom-api](http://codepickup.in/php/create-a-zoom-meeting-using-zoom-api/)

The official SDK [@zoomus/websdk](https://www.npmjs.com/package/@zoomus/websdk)

## Angular Webpack
Good blog [angular-webpack](https://developer.okta.com/blog/2019/12/09/angular-webpack)

## Okta 
Good one [spring-boot-application-with-okta](https://medium.com/@raghavendra.pes/securing-angular-spring-boot-application-with-okta-671e983e5b6)

## Keycloak
Link directly to registration
    
    http://localhost:8180/auth/realms/jobbstien/protocol/openid-connect/registrations?client_id=client-app&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=code

## Themes
Disable [cache](https://keycloakthemes.com/blog/how-to-turn-off-the-keycloak-theme-cache)

## Heroku
    $ heroku config:set NODE_MODULES_CACHE=true -a jobclub-ui-dev

## Local SSL
  
    $ openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout localhost.key -days 3560 -out localhost.crt -config certificate.cnf
    $ openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout local_jobbstien_no.key -days 3560 -out local.jobbstien.no.crt -config certificate_local_jobbstien_no.cnf
    $ openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout my_jobbstien_no.key -days 3560 -out my_jobbstien_no.crt -config certificate_my_jobbstien_no.cnf
    
Install `localhost.crt` in keychain

    $ ng serve --ssl true --host my.jobbstien.no --disable-host-check

## Typeform

- [codepen](https://codepen.io/Typeform/pen/rzaMEB)

### Good resources
- [keycloak-angular](https://www.npmjs.com/package/keycloak-angular)
- [integration-with-angular-frontend](https://medium.com/@sairamkrish/keycloak-integration-part-2-integration-with-angular-frontend-f2716c696a28)
- [How to create structural directive in Angular to manage permission based display](https://www.youtube.com/watch?v=GIjmJneoypw)
- [baeldung.com/keycloak-custom-login-page](https://www.baeldung.com/keycloak-custom-login-page)
- [Cancel button login screen](https://issues.redhat.com/browse/KEYCLOAK-1740)
- [using-angular-cli-to-serve-over-https-locally](https://medium.com/@richardr39/using-angular-cli-to-serve-over-https-locally-70dab07417c8)
- [if-you-are-getting-the-error-error-loading-extension-section-v3-ca-on-macos-follow-the-comment](https://medium.com/@dngrhm/if-you-are-getting-the-error-error-loading-extension-section-v3-ca-on-macos-follow-the-comment-d3c5bf275356)

    
    $ ng generate class shared/models/meeting --type=model
