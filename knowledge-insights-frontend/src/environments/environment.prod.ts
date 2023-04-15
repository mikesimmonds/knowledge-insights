export const environment = {
  production: true,
  auth0: {
    domain: 'mikesimmonds.uk.auth0.com',
    clientId: 'DpKe6oBAMub9MrTLGufND3S6wA30uihO',
    authorizationParams: {
      audience: 'https://hello-world.example.com',
      redirect_uri: 'https://knowledge-insights.azurewebsites.net/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'https://knowledge-insights.azurewebsites.net/',
  },
};
