const exec = require('child_process').execSync

const latestVersion = process.argv[2]
const version = process.argv[3]

exec(`git log --pretty=format:\"* %s (%h)\" ${latestVersion}...HEAD`, { stdio: 'inherit' })

console.log(`
-----

- **qiji.ttf** The 5916 core glyphs.
- **qiji-fallback.ttf** Fallback glyphs covering unicode entry point 0x4e00 - 0x9feb. Generated by adding noise and distortion to a digital font, simulating woodblock printed quality. Based on [Source Han Serif](https://github.com/adobe-fonts/source-han-serif), see [their SIL license](https://github.com/adobe-fonts/source-han-serif/blob/master/LICENSE.txt).
- **qiji-combo.ttf** Core and fallback combined in one font file, covering 0x4e00 - 0x9feb plus punctuations, for convenience.
`)