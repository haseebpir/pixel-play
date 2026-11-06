# Pixel Play — a retro arcade console skin for Video.js v10

**Pixel Play** turns the Video.js v10 player into a retro handheld arcade console:
a segmented XP-bar timeline, coin-gold accents, console-deck controls, and a big
**PRESS START** moment — all painted onto the standard v10 components, so every
control, menu, hotkey and announcement keeps working exactly as the framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux).
Design file: [Pixel Play — Video.js v10 Skin (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi)

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video (NASA's *Cosmic Dawn* trailer, hosted on Mux) —
no placeholder media. Change the preview media in `apps/preview/src/frame/player`.

## The design system

- **4px pixel grid** — every padding, border and icon snaps to multiples of 4px.
- **Zero rounded corners**, flat colour only: no blur, no glass, no `backdrop-filter`.
- **Hard offset shadows** (`4px 4px 0`) give the raised-console feel; pressing a button
  collapses the shadow and nudges it 2px — a mechanical key press.
- **Palette:** cabinet black `#0F0F1A`, panel raised `#1D1D30`, bevel light `#3D3D5C`,
  coin gold `#FFC93C` (primary accent), 1UP green `#35D461`, power magenta `#FF3E6C`,
  signal cyan `#33CCFF`, text `#F5F5FA` / muted `#A2A2BC`.
- **Type:** *Press Start 2P* for display moments only (title, PRESS START, menu
  headings); *Space Mono* with tabular figures for UI and time, so the clock never jitters.
- **Icons:** 24 pixel-art glyphs drawn as rects on a 16×16 grid with `crispEdges`,
  in `src/video/icons.ts`.

## Signature moments

- **XP-bar seek bar** — the fill renders as discrete gold segments over the real,
  continuous slider (driven by `--media-slider-fill`); the buffer is a dimmer green
  segmented run; the thumb is a chunky square block that grows on hover/focus.
- **PRESS START** — a static gold chip under the centre play button while paused.
  It never blinks (photosensitivity-safe). On ended it becomes **GAME CLEAR** with a replay glyph.
- **LOADING** — buffering shows five pixel blocks lighting left→right with a
  display-font caption.
- **Pixel toasts** — seek feedback is a `+10s` / `−10s` chip; the volume indicator is a
  true 10-block cyan meter.
- **Game-menu cursor** — the highlighted menu row carries a gold ▶ marker; the checked
  radio item is a filled gold square. State is always colour **plus** shape (e.g. the
  captions-on gold underline), never colour alone.
- **Error dialog** — a magenta-bordered cabinet panel; title, message and close stay
  fully keyboard-reachable.

## Accessibility

- No control ever sits on bare video: everything lives on the near-opaque cabinet
  deck or a solid chip, so legibility is identical over bright and dark footage.
- Touch targets ≥ 44px; the **3px gold focus outline is never removed**, and the deck
  stays visible while anything inside it has keyboard focus.
- Works in **light and dark colour schemes** (the skin syncs to the host page's
  `color-scheme`; the light scheme deepens the gold accent to keep contrast).
- `prefers-reduced-motion` disables transitions and the block-fill animation.
- **Forced-colors** fallbacks: fills become solid Highlight with a hatched buffer run.
- Scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status announcer and error
  dialog are all kept; tab order matches visual order because layout follows source order.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the pixel icon set + colour-scheme sync
src/video/skin.css    – the Pixel Play layer: tokens, deck, states, responsive & a11y blocks
src/video/icons.ts    – the 24-icon pixel set (16×16 grid)
src/skin.css          – font imports (Press Start 2P, Space Mono)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is forked,
which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed first in Figma (palette, desktop/mobile players, every state, components),
written up as a design spec, then implemented with an AI coding agent against the
version-matched Video.js v10.3.0 docs: scaffold project, pixel icon set, CSS layer,
then a fidelity pass comparing the running preview against the Figma frames —
followed by checks at desktop and mobile widths, both colour schemes, keyboard-only
navigation, reduced motion and forced colours.

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed and built by **Haseeb P.** — [The Hitek Agency](https://www.thehitekagency.com), Houston.
