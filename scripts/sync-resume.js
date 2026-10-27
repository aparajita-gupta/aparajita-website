#!/usr/bin/env node
// Copies the most recently modified resume PDF from ~/Documents/resume into
// public/resume.pdf, so the site's Resume button always serves the latest
// version. Run this (via `npm run sync-resume`) whenever a new resume draft
// is saved, before committing/pushing.

const fs = require("fs");
const path = require("path");
const os = require("os");

const sourceDir = path.join(os.homedir(), "Documents", "resume");
const dest = path.join(__dirname, "..", "public", "resume.pdf");

// On Vercel's build server (or any machine without this folder) there's
// nothing to sync from — skip quietly instead of failing the build.
if (!fs.existsSync(sourceDir)) {
  console.log(`No ${sourceDir} found here, skipping resume sync.`);
  process.exit(0);
}

const candidates = fs
  .readdirSync(sourceDir)
  .filter((f) => f.toLowerCase().endsWith(".pdf"))
  .map((f) => {
    const full = path.join(sourceDir, f);
    return { file: f, full, mtime: fs.statSync(full).mtimeMs };
  })
  .sort((a, b) => b.mtime - a.mtime);

if (candidates.length === 0) {
  console.error(`No PDF files found in ${sourceDir}`);
  process.exit(1);
}

const latest = candidates[0];
fs.copyFileSync(latest.full, dest);
console.log(`Synced latest resume: ${latest.file} -> public/resume.pdf`);
