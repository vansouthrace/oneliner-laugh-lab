import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I didn't eat your sock. I merely relocated it to a secure facility under the sofa, where it now pays rent in lint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
