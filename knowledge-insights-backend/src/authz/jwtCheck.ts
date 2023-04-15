// // src/authz/check-jwt.ts
// import jwt from 'express-jwt';
// import * as jwksRsa from 'jwks-rsa';
// import * as dotenv from 'dotenv';

// dotenv.config();


// // Your Auth0 domain, which can be found in your Auth0 dashboard
// const auth0Domain = process.env.AUTH0_DOMAIN;
// const auth0Audience = process.env.AUTH0_AUDIENCE;

// const jwtCheck = jwt({
//   // Dynamically provide a signing key based on the `kid` in the header and the signing keys provided by the JWKS endpoint
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${auth0Domain}/.well-known/jwks.json`
//   }),

//   // Validate the audience and the issuer
//   audience: auth0Audience,
//   issuer: `https://${auth0Domain}/`,
//   algorithms: ['RS256']
// });

// export default jwtCheck;
