import * as dotenv from "dotenv";
import { auth, requiredScopes } from "express-oauth2-jwt-bearer";

dotenv.config();

export const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
});

export const checkScopes = requiredScopes('read:admin-messages');
