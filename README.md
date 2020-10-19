# Jobclub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

The official SDK [@zoomus/websdk](https://www.npmjs.com/package/@zoomus/websdk)

## Angular Webpack
Good blog [angular-webpack](https://developer.okta.com/blog/2019/12/09/angular-webpack)
