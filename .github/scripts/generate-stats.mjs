// Renders the stats cards for README.md with github-readme-stats' own
// fetchers/renderers, so the profile no longer depends on the public
// Vercel instance (which returns 503 when its GitHub API quota is exhausted).
// Run from inside a github-readme-stats checkout (see update-stats.yml).
import { mkdirSync, writeFileSync } from "node:fs";
import { renderStatsCard } from "./src/cards/stats.js";
import { renderTopLanguages } from "./src/cards/top-languages.js";
import { fetchStats } from "./src/fetchers/stats.js";
import { fetchTopLanguages } from "./src/fetchers/top-languages.js";

const username = process.env.GH_USER;
const outDir = process.env.OUT_DIR;

const stats = await fetchStats(username);
const statsSvg = renderStatsCard(stats, {
  show_icons: true,
  hide_title: true,
  icon_color: "CE1D2D",
  text_color: "718096",
  bg_color: "ffffff",
});

const langs = await fetchTopLanguages(username);
const langsSvg = renderTopLanguages(langs, { layout: "compact" });

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/stats.svg`, statsSvg);
writeFileSync(`${outDir}/top-langs.svg`, langsSvg);
