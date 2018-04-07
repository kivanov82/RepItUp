// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  kvk: {
    questionId: '5ac8ddea80e8f5210f92f2e5',
    secret: 'e9f8913b7847257e325c7aed047a477944a9d3cf',
  },
  apiUrl: 'http://10.0.169.251:8080'
};
