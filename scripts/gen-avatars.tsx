import React, { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
// tsx compiles JSX to React.createElement — make it available globally
;(globalThis as any).React = React
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// Dynamic import to avoid top-level await issues
const { Avatar } = await import('../src/data/avatars.js')
const { personalities } = await import('../src/data/personalities.js')

const outDir = join(root, 'public', 'avatars')
mkdirSync(outDir, { recursive: true })

const BG = '#0d1117'

for (const p of personalities) {
  const inner = renderToStaticMarkup(createElement(Avatar, { code: p.code, size: 100 }))
  // Wrap in a standalone SVG with dark background
  const svg = inner.replace(
    '<svg ',
    `<svg style="background:${BG}" `
  )
  writeFileSync(join(outDir, `${p.code}.svg`), svg)
  console.log(`✓ ${p.code}.svg`)
}

console.log(`\nDone — ${personalities.length} avatars written to public/avatars/`)
