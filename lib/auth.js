import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

//compare : see if plain text matches hash

export async function verifyPasssword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
