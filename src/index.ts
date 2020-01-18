#!/usr/bin/env node

import { copyFileSync } from "fs";
import { resolve } from "path";

function main(): void {
  const editorConfig = '.editorconfig'
  const source = resolve(__dirname, 'assets', editorConfig)
  const dest = resolve(process.cwd(), editorConfig)
  copyFileSync(source, dest)
}

main()
