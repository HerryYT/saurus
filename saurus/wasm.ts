import { createHash } from "https://deno.land/std/hash/mod.ts";

export * from "https://raw.githubusercontent.com/hazae41/denoflate/master/mod.ts";

export function hashOf(...datas: ArrayBuffer[]) {
  const hash = createHash("sha256");
  for (const data of datas) {
    hash.update(data);
  }
  return new Uint8Array(hash.digest());
}
