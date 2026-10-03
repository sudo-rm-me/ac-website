import sharp from 'sharp'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const source = join(root, '1nplace-logo-source.jpg')
const cleanPath = join(root, '1nplace-logo-clean.png')

const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info

const visited = new Uint8Array(width * height)
const queue = []
const push = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return
  const i = y * width + x
  if (visited[i]) return
  visited[i] = 1
  queue.push(i)
}

for (const [x, y] of [
  [0, 0],
  [width - 1, 0],
  [0, height - 1],
  [width - 1, height - 1],
  [Math.floor(width / 2), 0],
  [0, Math.floor(height / 2)],
  [width - 1, Math.floor(height / 2)],
  [Math.floor(width / 2), height - 1],
]) {
  push(x, y)
}

while (queue.length) {
  const i = queue.pop()
  const o = i * channels
  const r = data[o]
  const g = data[o + 1]
  const b = data[o + 2]
  if (!(r > 200 && g > 200 && b > 200)) continue
  data[o + 3] = 0
  const x = i % width
  const y = Math.floor(i / width)
  push(x + 1, y)
  push(x - 1, y)
  push(x, y + 1)
  push(x, y - 1)
}

// Recolor remaining low-saturation bright fringe (baked white stroke) to tile dark.
const dark = [10, 26, 34]
for (let i = 0; i < width * height; i++) {
  const o = i * channels
  if (data[o + 3] === 0) continue
  const r = data[o]
  const g = data[o + 1]
  const b = data[o + 2]
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
  const sat = Math.max(r, g, b) - Math.min(r, g, b)
  if (luma > 165 && sat < 45) {
    data[o] = dark[0]
    data[o + 1] = dark[1]
    data[o + 2] = dark[2]
    data[o + 3] = 255
  }
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(cleanPath)

async function resizePng(size, out) {
  await sharp(cleanPath).resize(size, size).png().toFile(out)
}

await resizePng(1024, join(root, 'icon-1024.png'))
await resizePng(512, join(root, 'icon-512.png'))
await resizePng(256, join(root, 'icon-256.png'))
await resizePng(180, join(root, 'apple-touch-icon.png'))
await resizePng(128, join(root, '128x128.png'))
await resizePng(32, join(root, '32x32.png'))

// Build simple multi-size ICO from PNG buffers (PNG-compressed icon entries).
async function writeIco(sizes, outPath) {
  const images = []
  for (const size of sizes) {
    const bytes = await sharp(cleanPath).resize(size, size).png().toBuffer()
    images.push({ size, bytes })
  }
  const headerSize = 6 + 16 * images.length
  let offset = headerSize
  const bufs = []
  const header = Buffer.alloc(headerSize)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)
  let cursor = 6
  for (const img of images) {
    header[cursor] = img.size >= 256 ? 0 : img.size
    header[cursor + 1] = img.size >= 256 ? 0 : img.size
    header[cursor + 2] = 0
    header[cursor + 3] = 0
    header.writeUInt16LE(1, cursor + 4)
    header.writeUInt16LE(32, cursor + 6)
    header.writeUInt32LE(img.bytes.length, cursor + 8)
    header.writeUInt32LE(offset, cursor + 12)
    offset += img.bytes.length
    cursor += 16
    bufs.push(img.bytes)
  }
  writeFileSync(outPath, Buffer.concat([header, ...bufs]))
}

await writeIco([16, 32, 48, 256], join(root, 'favicon.ico'))
await writeIco([32, 64, 128, 256], join(root, 'icon.ico'))

const targets = [
  ['../public/1nplace-logo.png', 'icon-256.png'],
  ['../public/favicon.ico', 'favicon.ico'],
  ['../public/apple-touch-icon.png', 'apple-touch-icon.png'],
  ['../public/og-share.png', 'icon-512.png'],
  ['../../1nPlace-Encrypt/apps/desktop/public/favicon.ico', 'favicon.ico'],
  ['../../1nPlace-Encrypt/apps/desktop/public/favicon.png', 'icon-512.png'],
  ['../../1nPlace-Encrypt/apps/desktop/public/apple-touch-icon.png', 'apple-touch-icon.png'],
  ['../../1nPlace-Encrypt/apps/desktop/public/icon-256.png', 'icon-256.png'],
  ['../../1nPlace-Encrypt/assets/favicon.ico', 'favicon.ico'],
  ['../../1nPlace-Encrypt/assets/favicon.png', 'icon-512.png'],
  ['../../1nPlace-Encrypt/apps/desktop/src-tauri/icons/icon.png', 'icon-512.png'],
  ['../../1nPlace-Encrypt/apps/desktop/src-tauri/icons/icon.ico', 'icon.ico'],
  ['../../1nPlace-Encrypt/apps/desktop/src-tauri/icons/128x128.png', '128x128.png'],
  ['../../1nPlace-Encrypt/apps/desktop/src-tauri/icons/32x32.png', '32x32.png'],
  ['../../1nPlace-CMDB/apps/web/public/favicon.ico', 'favicon.ico'],
  ['../../1nPlace-CMDB/apps/web/public/favicon.png', 'icon-512.png'],
  ['../../1nPlace-CMDB/apps/web/public/apple-touch-icon.png', 'apple-touch-icon.png'],
  ['../../1nPlace-CMDB/apps/desktop/public/favicon.ico', 'favicon.ico'],
  ['../../1nPlace-CMDB/apps/desktop/public/favicon.png', 'icon-512.png'],
  ['../../1nPlace-CMDB/apps/desktop/public/apple-touch-icon.png', 'apple-touch-icon.png'],
  ['../../1nPlace-CMDB/apps/desktop/src-tauri/icons/icon.png', 'icon-512.png'],
  ['../../1nPlace-CMDB/apps/desktop/src-tauri/icons/icon.ico', 'icon.ico'],
  ['../../1nPlace-CMDB/apps/desktop/src-tauri/icons/128x128.png', '128x128.png'],
  ['../../1nPlace-CMDB/apps/desktop/src-tauri/icons/32x32.png', '32x32.png'],
]

const { copyFileSync } = await import('node:fs')
for (const [destRel, srcName] of targets) {
  const dest = join(root, destRel)
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(join(root, srcName), dest)
}

console.log('Processed and redistributed clean logo assets')
