import { createHmac } from "node:crypto";

const OG_SECRET = process.env.OG_SECRET ?? "my_secret";

export function getToken(id: string): string {
  const hmac = createHmac("sha256", OG_SECRET);
  hmac.update(JSON.stringify({ id }));
  return hmac.digest("hex");
}