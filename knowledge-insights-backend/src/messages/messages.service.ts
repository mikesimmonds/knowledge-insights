import { Message } from "./message.model";

export const getPublicMessage = (): Message => {
  return {
    text: "This is a public message from the express server.",
  };
};

export const getProtectedMessage = (): Message => {
  return {
    text: "This is a protected message from the express server.",
  };
};

export const getAdminMessage = (): Message => {
  return {
    text: "This is an admin message from the express server.",
  };
};
