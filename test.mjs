// TDD-lite test for the smart-fridge roast entry (Node stdlib only).
// Run: node test.mjs  (from this directory, with MAKEFUN_OUTPUT_DIR set)
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/tmp/fridge-test-out";
const entryPath = join(outDir, "entry.txt");

let failures = 0;
function check(name, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"}: ${name}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures++;
}

check("entry.txt exists", existsSync(entryPath));
if (existsSync(entryPath)) {
  const text = readFileSync(entryPath, "utf8");
  check("1–160 characters", text.length >= 1 && text.length <= 160, `${text.length} chars`);
  check("not only whitespace", text.trim().length > 0);
  check("single line (no newline inside)", !text.includes("\n"));
  check("roasts a smart fridge", /fridge/i.test(text));
  check("names a real fridge behaviour", /reorder|oat milk|ice-cream|3:12/i.test(text));
  check("ends with a sting, not a flat statement", /again\.'?$/.test(text.trim()));
}

process.exit(failures === 0 ? 0 : 1);
