import { decodeTokenWith, signUserToken, userIdFromAuthHeader } from "./jwt-core.js";
import dotenv from "dotenv";
import { db } from "../models/db.js";

const result = dotenv.config();

export function createToken(user) {
  return signUserToken(user, process.env.cookie_password);
}

export function decodeToken(token) {
  return decodeTokenWith(token, process.env.cookie_password);
}

export async function validate(decoded, request) {
  const user = await db.userStore.getUserById(decoded.id);
  if (!user) {
    return { isValid: false };
  }
  return { isValid: true, credentials: user };
}

export function getUserIdFromRequest(request) {
  return userIdFromAuthHeader(request?.headers?.authorization, process.env.cookie_password);
}
