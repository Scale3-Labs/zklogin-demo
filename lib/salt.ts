import crypto from "crypto";
import jwt from "jsonwebtoken";

// Static master seed value - store this securely and do not expose or change it!
const MASTER_SEED = process.env.MASTER_SEED as string;

interface DecodedToken {
  iss: string;
  aud: string;
  sub: string;
  [key: string]: any;
}

export function deriveUserSalt(token: string): bigint {
  const decoded: DecodedToken | null = jwt.decode(token) as DecodedToken;
  if (!decoded) {
    throw new Error("Invalid JWT token");
  }

  const { iss, aud, sub } = decoded;

  return BigInt(`0x${hkdf(MASTER_SEED, `${iss}${aud}`, sub)}`);
}

function hkdf(ikm: string, salt: string, info: string): string {
  const key = crypto.createHmac("sha256", salt).update(ikm).digest();
  const derived = crypto.createHmac("sha256", key).update(info).digest();
  return derived.toString("hex");
}
