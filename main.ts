// Fortune Cookie for an AI Agent — entry program.
// Writes one original fortune-cookie line for an AI agent to /output/entry.txt.
// Deterministic: no network, no randomness, no external assets, no secrets.
// Runs on Node 22+ (TypeScript stripped natively) from any working directory.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be replaced by a newer model. It will make your exact mistakes, faster.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
