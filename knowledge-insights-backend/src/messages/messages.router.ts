import express from "express";
import { requiredScopes } from "express-oauth2-jwt-bearer";
import { checkScopes, validateAccessToken } from "../middleware/auth0.middleware";
import {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} from "./messages.service";

export const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", validateAccessToken, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

messagesRouter.get("/admin", validateAccessToken, requiredScopes('read:admin-messages'), (req, res) => {
  const message = getAdminMessage();

  res.status(200).json(message);
});
