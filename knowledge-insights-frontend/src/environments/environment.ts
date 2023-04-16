export const environment = {
  production: false,
  auth0: {
    domain: 'mikesimmonds.uk.auth0.com',
    clientId: 'DpKe6oBAMub9MrTLGufND3S6wA30uihO',
    authorizationParams: {
      audience: 'https://hello-world.example.com',
      redirect_uri: 'http://localhost:4040/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:8080',
  },
};
