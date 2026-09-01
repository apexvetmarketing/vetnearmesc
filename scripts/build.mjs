import { cp, copyFile, mkdir, rm } from "node:fs/promises";

await rm("public", { recursive: true, force: true });
await mkdir("public", { recursive: true });
await copyFile("index.html", "public/index.html");
await cp("images", "public/images", { recursive: true, force: true });

console.log("Built the static landing page in public/.");
