/**
 * Site-wide client behaviour: the theme toggle and the email link. Bundled
 * once; Astro's router fires `astro:page-load` after every navigation.
 */

const THEME_KEY = 'theme';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

type Theme = 'light' | 'dark';

const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

function syncToggleLabels(): void {
  const label = currentTheme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-label', label);
  });
}

let switchingTimer: number | undefined;

function setTheme(theme: Theme): void {
  const root = document.documentElement;

  if (!reducedMotion.matches) {
    root.classList.add('theme-switching');
    window.clearTimeout(switchingTimer);
    switchingTimer = window.setTimeout(() => root.classList.remove('theme-switching'), 250);
  }

  root.dataset.theme = theme;

  // The system theme is the default. Picking the theme that matches it
  // clears the override, so the site goes back to following the OS
  // (including live changes); picking the other one is remembered.
  const followsSystem = theme === (systemDark.matches ? 'dark' : 'light');
  try {
    if (followsSystem) window.localStorage.removeItem(THEME_KEY);
    else window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the
    // choice then lasts for this page only.
  }

  // Following the system: restore the per-scheme browser UI colours.
  // Overriding it: paint the browser UI in the chosen theme's colour.
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    const scheme = meta.getAttribute('media')?.includes('dark') ? 'dark' : 'light';
    const shown = followsSystem ? scheme : theme;
    meta.setAttribute('content', shown === 'dark' ? '#121212' : '#FFFFFF');
  });

  syncToggleLabels();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element) || !target.closest('[data-theme-toggle]')) return;
  setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
});

/** Builds the mailto link on the client so the address never sits in the HTML. */
function revealEmail(): void {
  document.querySelectorAll<HTMLElement>('[data-email]').forEach((el) => {
    const { u, d, t } = el.dataset;
    if (!u || !d || !t) return;
    const address = `${u}@${d}.${t}`;
    const link = document.createElement('a');
    link.href = `mailto:${address}`;
    link.textContent = address;
    el.replaceChildren(link);
    el.removeAttribute('data-email');
  });
}

// The head script re-applies the system theme when the OS switches; keep the
// toggle's label in step with it.
systemDark.addEventListener('change', syncToggleLabels);

document.addEventListener('astro:page-load', () => {
  syncToggleLabels();
  revealEmail();
});
