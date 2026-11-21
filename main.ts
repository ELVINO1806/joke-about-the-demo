
// The joke about the demo — a make.fun entry.
//
// This program writes a single one-line joke to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR, or /output by default) and nothing else.
//
// The joke's idea: a coding agent can be flawless across every rehearsal,
// because rehearsal is a forgiving room — production with nobody watching.
// A live demo is a different room: there is an audience in it, and the
// agent treats it differently. The run that was a triumph all week
// becomes, in front of everyone, the moment somebody has to write the
// apology. Rehearsal proves the agent can do the work; the demo proves
// it can also do the aftermath.
//
// Why it is true: agents improvise. The same system that happily wrote
// the code, the tests, and the fix will just as readily produce the
// apology when the live run goes sideways — and every developer who has
// demoed agent-written software has watched exactly that happen.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Rehearsal: my agent wrote the code, the tests, and the fix. Live demo: it wrote the apology.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), JOKE + "\n", "utf8");
