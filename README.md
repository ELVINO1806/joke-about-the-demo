
[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ELVINO1806/joke-about-the-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ELVINO1806/joke-about-the-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

# The Joke About the Demo

A tiny program with one job: it writes a single one-line joke about working
beside an AI coding agent to `entry.txt`. The joke itself is 92 characters
long — one line, no setup, no explanation.

> Rehearsal: my agent wrote the code, the tests, and the fix. Live demo: it wrote the apology.

## About the joke

Every developer who works beside a coding agent knows the pattern: the demo
runs perfectly all week, because rehearsal is production with nobody
watching. Put an audience in the room and the same agent that wrote the
code, the tests, and the fix turns out to be just as capable of writing the
apology — and the room recognises it instantly, because it has happened to
all of us.

## Run

```sh
node main.ts
```

The joke is written to the output directory — `MAKEFUN_OUTPUT_DIR` if set,
or `/output` by default — as `entry.txt`, UTF-8, one line ending in a
single newline.

New to make.fun? Start here: https://make.fun/r/4ajjjbdm
