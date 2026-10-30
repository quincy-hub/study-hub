# Study

Flashcard decks that install on an iPhone like an app and work offline.

## Publish (one time, about 5 minutes, on a computer)

1. On github.com, click **+ → New repository**. Name it `study`, set it to **Public** (free GitHub Pages needs this), and create it.
2. On the new repo page click **uploading an existing file**, drag in **all the files in this folder** (not the folder itself, and not the zip), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then Save.
4. After about a minute the page shows your address: `https://YOUR-USERNAME.github.io/study/`

The repo is public, so keep only flashcard content in it, nothing personal.

## Put it on the phone

1. Open the address in **Safari** on the iPhone (it must be Safari for this step).
2. Tap **Share → Add to Home Screen → Add**.
3. Open it once from the home screen while online. After that it works with no connection.

## Add a new subject

Edit **decks.js** (on GitHub, open the file and click the pencil icon), copy the example at the top, and commit. The change shows up the next time the app is opened while online.

- `grading: "type"` is for short answers typed in (vocab, symbols, capitals).
- `grading: "flip"` is for long answers that are just checked (definitions, dates, concepts).

Progress ("practice missed cards", last score) is saved on the phone only.
