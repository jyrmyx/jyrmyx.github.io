import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')

test('production build exists', () => {
  assert.ok(
    existsSync(indexPath),
    'dist/index.html is missing — run npm run build first',
  )
})

test('page ships identity, capabilities, and portrait — not the work draft', () => {
  const html = readFileSync(indexPath, 'utf8')

  for (const needle of [
    'Jyri Ilama',
    'AWS architecture',
    'CI/CD',
    'Infrastructure as code',
    'Everything is code',
    'AI in the work',
    '/jyri.jpg',
    'https://fi.linkedin.com/in/jyriilama',
    'https://github.com/jyrmyx',
    'mailto:jyri.ilama@gmail.com',
    `with ${new Date().getFullYear() - 2008} years of experience`,
    'data-career-start="2008"',
  ]) {
    assert.ok(html.includes(needle), `expected to find ${JSON.stringify(needle)}`)
  }

  assert.equal(html.includes('Selected work'), false, 'selected work draft must stay off the page')
})

test('static assets land in dist', () => {
  assert.ok(existsSync(join(dist, 'jyri.jpg')), 'dist/jyri.jpg')
  assert.ok(existsSync(join(dist, 'favicon.svg')), 'dist/favicon.svg')
  assert.equal(readFileSync(join(dist, 'CNAME'), 'utf8').trim(), 'ilama.dev')
})
