// Roast the Smart Fridge: One Line, Best Laugh Wins
// Writes one roast line (<= 160 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const ENTRY =
  "My smart fridge reorders oat milk I never drink, live-streamed my 3:12 AM ice-cream raid, then CC'd my doctor: 'He's doing it again.'";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
