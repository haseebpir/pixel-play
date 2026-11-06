/**
 * Pixel Play icon set.
 *
 * Pixel-art glyphs drawn on a 16×16 grid with `shape-rendering: crispEdges` and
 * single-weight blocks (mostly 2-unit "pixels"), registered over the Scaffold
 * family so every `<media-icon family="scaffold">` in the skin markup renders
 * the Pixel Play versions. All glyphs are plain rects/paths in `currentColor`,
 * matching the format the Scaffold icons use.
 */

const svg = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true" viewBox="0 0 16 16"><g shape-rendering="crispEdges">${body}</g></svg>`;

const r = (x: number, y: number, w: number, h: number): string =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}"/>`;

/** Stepped triangle pointing right (play). */
export const playIcon = svg(r(4, 2, 2, 12) + r(6, 4, 2, 8) + r(8, 6, 2, 4) + r(10, 7, 2, 2));

export const pauseIcon = svg(r(3, 2, 4, 12) + r(9, 2, 4, 12));

/** Bar + triangle: jump back to the start. */
export const restartIcon = svg(r(2, 2, 2, 12) + r(6, 3, 2, 10) + r(8, 5, 2, 6) + r(10, 7, 2, 2));

/** Stepped circular arrow, clockwise, with a blocky arrowhead at the top right. */
export const seekIcon = svg(
  r(4, 2, 7, 2) +
    r(2, 4, 2, 6) +
    r(2, 10, 2, 2) +
    r(4, 12, 7, 2) +
    r(11, 10, 2, 2) +
    r(12, 7, 2, 3) +
    r(11, 1, 2, 1) +
    r(11, 2, 3, 1) +
    r(11, 3, 4, 2) +
    r(11, 5, 3, 1) +
    r(11, 6, 2, 1),
);

/** Speaker body shared by the volume glyphs (occupies x 0–6). */
const speaker = r(0, 6, 2, 4) + r(2, 4, 2, 8) + r(4, 2, 2, 12);

/** One stepped ">" wave. */
const wave = (x: number, y: number): string => r(x, y, 2, 2) + r(x + 2, y + 2, 2, 2) + r(x, y + 4, 2, 2);

export const volumeHighIcon = svg(speaker + wave(8, 5) + r(11, 4, 2, 2) + r(13, 7, 2, 2) + r(11, 10, 2, 2));

export const volumeLowIcon = svg(speaker + wave(9, 5));

export const volumeOffIcon = svg(
  speaker + r(9, 5, 2, 2) + r(11, 7, 2, 2) + r(13, 9, 2, 2) + r(13, 5, 2, 2) + r(9, 9, 2, 2),
);

const captionsBox = r(1, 2, 14, 2) + r(1, 12, 14, 2) + r(1, 2, 2, 12) + r(13, 2, 2, 12);

export const captionsOffIcon = svg(captionsBox + r(4, 5, 3, 2) + r(9, 5, 3, 2) + r(4, 9, 5, 2));

export const captionsOnIcon = svg(
  `<path fill-rule="evenodd" d="M1 2h14v12H1zM4 5h3v2H4zM9 5h3v2H9zM4 9h5v2H4z"/>`,
);

export const checkIcon = svg(
  r(2, 7, 2, 2) + r(4, 9, 2, 2) + r(6, 11, 2, 2) + r(8, 9, 2, 2) + r(10, 7, 2, 2) + r(12, 5, 2, 2) + r(13, 3, 2, 2),
);

export const chevronIcon = svg(r(5, 3, 2, 2) + r(7, 5, 2, 2) + r(9, 7, 2, 2) + r(7, 9, 2, 2) + r(5, 11, 2, 2));

export const fullscreenEnterIcon = svg(
  r(2, 2, 5, 2) +
    r(2, 2, 2, 5) +
    r(9, 2, 5, 2) +
    r(12, 2, 2, 5) +
    r(2, 9, 2, 5) +
    r(2, 12, 5, 2) +
    r(12, 9, 2, 5) +
    r(9, 12, 5, 2),
);

export const fullscreenExitIcon = svg(
  r(5, 5, 3, 2) +
    r(5, 5, 2, 5) +
    r(9, 5, 3, 2) +
    r(10, 5, 2, 5) +
    r(5, 6, 2, 5) +
    r(5, 9, 3, 2) +
    r(10, 6, 2, 5) +
    r(8, 9, 4, 2),
);

/** Blocky gear: eight teeth around a square body with a square hole. */
export const gearIcon = svg(
  r(7, 1, 2, 3) +
    r(7, 12, 2, 3) +
    r(1, 7, 3, 2) +
    r(12, 7, 3, 2) +
    r(3, 3, 2, 2) +
    r(11, 3, 2, 2) +
    r(3, 11, 2, 2) +
    r(11, 11, 2, 2) +
    `<path fill-rule="evenodd" d="M4 4h8v8H4zM7 7h2v2H7z"/>`,
);

const pipFrame = r(1, 2, 14, 2) + r(1, 13, 14, 2) + r(1, 2, 2, 13) + r(13, 2, 2, 13);

export const pipEnterIcon = svg(pipFrame + r(7, 7, 6, 2) + r(7, 11, 6, 2) + r(7, 7, 2, 6) + r(11, 7, 2, 6));

export const pipExitIcon = svg(pipFrame + r(8, 8, 4, 4));

export const airplayEnterIcon = svg(
  r(1, 2, 14, 2) +
    r(1, 2, 2, 9) +
    r(13, 2, 2, 9) +
    r(1, 11, 3, 2) +
    r(12, 11, 3, 2) +
    r(7, 5, 2, 2) +
    r(6, 7, 4, 2) +
    r(5, 9, 6, 2) +
    r(4, 11, 8, 2),
);

export const airplayExitIcon = svg(`<path fill-rule="evenodd" d="M1 2h14v11H1zM8 6l3 5H5z"/>`);

const castFrame = r(1, 2, 14, 2) + r(13, 2, 2, 12) + r(8, 12, 7, 2) + r(1, 2, 2, 4);

const castWaves = r(1, 13, 2, 2) + r(2, 10, 2, 2) + r(4, 12, 2, 2) + r(2, 7, 2, 2) + r(4, 9, 2, 2) + r(6, 11, 2, 2);

export const castEnterIcon = svg(castFrame + castWaves);

export const castExitIcon = svg(castFrame + castWaves + r(5, 4, 8, 5));

/** Speech bubble with two audio bars (audio tracks menu). */
export const speechIcon = svg(
  r(2, 2, 12, 2) +
    r(2, 10, 12, 2) +
    r(2, 2, 2, 10) +
    r(12, 2, 2, 10) +
    r(4, 12, 2, 2) +
    r(2, 14, 2, 2) +
    r(5, 5, 2, 4) +
    r(9, 5, 2, 4),
);

/** Gauge dome with a needle pointing up-right (playback speed menu). */
export const speedIcon = svg(
  r(2, 9, 2, 2) +
    r(3, 6, 2, 2) +
    r(5, 4, 2, 2) +
    r(7, 3, 2, 2) +
    r(10, 4, 2, 2) +
    r(12, 6, 2, 2) +
    r(13, 9, 2, 2) +
    r(7, 9, 2, 2) +
    r(9, 7, 2, 2) +
    r(2, 12, 12, 2),
);

/** Two slider tracks with offset knobs (quality menu). */
export const switchesIcon = svg(r(2, 3, 12, 2) + r(6, 2, 4, 4) + r(2, 11, 12, 2) + r(9, 10, 4, 4));

/**
 * Buffering: a row of five pixel blocks that light up left → right in steps.
 * The animation runs through `--media-spinner-animation`, so the theme's
 * reduced-motion preferences (which set that variable to `none`) stop it.
 */
export const spinnerIcon =
  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" aria-hidden="true" viewBox="0 0 16 4">` +
  `<style>@keyframes pixel-play-blocks{0%,55%,100%{opacity:.25}20%,40%{opacity:1}}rect{animation:var(--media-spinner-animation, pixel-play-blocks 1.25s linear infinite)}</style>` +
  `<g shape-rendering="crispEdges">` +
  `<rect x="1" y="1" width="2" height="2"/>` +
  `<rect x="4" y="1" width="2" height="2" style="animation-delay:-1s"/>` +
  `<rect x="7" y="1" width="2" height="2" style="animation-delay:-.75s"/>` +
  `<rect x="10" y="1" width="2" height="2" style="animation-delay:-.5s"/>` +
  `<rect x="13" y="1" width="2" height="2" style="animation-delay:-.25s"/>` +
  `</g></svg>`;

/** Every Pixel Play glyph, keyed by the Scaffold icon names the skin markup uses. */
export const pixelIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
