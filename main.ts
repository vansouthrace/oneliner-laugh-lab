// One-Liner Laugh Lab — one funny line answering the prompt (max 200 chars).
// Prompt: the excuse a robot vacuum gives after eating a sock.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I did not eat your sock. I performed an emergency suction procedure on a hostile textile, and it now lives in my dustbin.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
