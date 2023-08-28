import { createClient } from "@vercel/kv";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const users = createClient({
    url: process.env.USERS_REST_API_URL,
    token: process.env.USERS_REST_API_TOKEN
  });

  const user = await users.hgetall("user:me");

  const products = createClient({
    url: process.env.PRODUCTS_REST_API_URL,
    token: process.env.PRODUCTS_REST_API_TOKEN
  });

  const product = await products.hgetall("product:shirt");
  return response.status(200).json({ user, product });
}
