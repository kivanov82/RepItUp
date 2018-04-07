// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  kvk: {
    questionId: '5ac8c3dc80e8f5210f92f2a6',
    secret: '6f57be0d538757bb7a3343a9aa4e62023ec4aa86',
  },
  apiUrl: 'http://10.0.169.251:8080'
};
