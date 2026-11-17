# Lexiterra: standalone version

A static web app: four files, no server code, no account, no tracking.

## Files

- `index.html`: the whole game, encrypted with the family passphrase (AES-256, key derived with PBKDF2)
- `version.txt`: build stamp; the app compares it each time it comes back to the foreground and reloads itself when a newer build is online
- `sw.js`: offline support (the game keeps working without network after the first visit)
- `manifest.webmanifest`, `icon-180.png`, `icon-512.png`: home screen icon and full screen mode

## Hosting

Upload the content of this folder, as is, to any static HTTPS host
(GitHub Pages, Netlify, Cloudflare Pages, a personal web space). HTTPS is required for offline support.

## On the iPad

1. Open the hosted address in Safari.
2. Share button, then "Add to Home Screen".
3. Launch the game from the new icon: it opens full screen and works offline.

## Access protection

- The repository and the address stay public, but the game content is encrypted. Without the passphrase the page shows only a code prompt.
- The passphrase is asked once per device; a derived key is then kept in the browser storage of that device.
- The protection is as strong as the passphrase. Never commit the passphrase to the repository.
- To change the passphrase, the file must be rebuilt (ask for a new build).

## Good to know

- Progress and records are saved on the iPad only (browser storage of the home screen app).
  Deleting the icon or clearing Safari website data erases them.
- To update the game, replace `index.html` and `version.txt` on the host. The iPad reloads the new build the next time the app comes to the foreground (never in the middle of an expedition).
- The address is public: anyone who has it can play, but nobody can see your child's progress.
- The world, the creatures and their drawings are original. No third-party characters, logos or images are used.
