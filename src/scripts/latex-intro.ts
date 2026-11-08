/**
 * Typesets the home-page intro from LaTeX source, token by token.
 *
 * Phases:
 *   source     shows `\emph{…}` source with a caret; status "$ pdflatex intro.tex"
 *   compiling  typesets forward, 45ms per token
 *   done       fully typeset
 *   reverting  runs back to source, 18ms per token
 *
 * A mouse hovering for 250ms reverts to source and leaving typesets again.
 * Touch and pen have no hover, so a tap reverts to source, holds it for
 * `tapHold`, then typesets again. Tapping while the source shows restarts
 * the hold.
 *
 * The visual state is CSS-driven: a token shows as source until it has
 * `.is-done`. The server renders the final typeset text, so with no JS or
 * reduced motion nothing here runs and the paragraph stays typeset.
 */

const TIMING = {
  initialDelay: 1400,
  forwardStep: 45,
  backwardStep: 18,
  hoverDelay: 250,
  resumeDelay: 250,
  /** How long a tap leaves the source showing before typesetting again. */
  tapHold: 1400,
} as const;

const STATUS = {
  source: '$ pdflatex intro.tex',
  compiling: 'typesetting…',
  reverting: 'viewing source…',
  done: 'Output written on intro.pdf (1 page).',
} as const;

type Phase = keyof typeof STATUS;

export function initLatexIntro(root: HTMLElement): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const tokens = Array.from(root.querySelectorAll<HTMLElement>('.live .tok'));
  const status = root.querySelector<HTMLElement>('[data-status]');
  const total = tokens.length;

  let step = 0;
  let delayTimer: number | undefined;
  let stepTimer: number | undefined;
  let hoverTimer: number | undefined;

  const setPhase = (phase: Phase) => {
    root.dataset.phase = phase;
    if (status) status.textContent = STATUS[phase];
  };

  const setStep = (next: number) => {
    step = next;
    tokens.forEach((token, i) => token.classList.toggle('is-done', i < step));
  };

  const stop = () => {
    window.clearTimeout(delayTimer);
    window.clearInterval(stepTimer);
  };

  const forward = (delay: number) => {
    stop();
    delayTimer = window.setTimeout(() => {
      setPhase('compiling');
      stepTimer = window.setInterval(() => {
        const next = step + 1;
        if (next >= total) {
          window.clearInterval(stepTimer);
          setStep(total);
          setPhase('done');
        } else {
          setStep(next);
        }
      }, TIMING.forwardStep);
    }, delay);
  };

  /** Runs back to source; with `holdThenResume`, typesets again after `tapHold`. */
  const backward = (holdThenResume = false) => {
    stop();
    setPhase('reverting');
    stepTimer = window.setInterval(() => {
      const next = step - 1;
      if (next <= 0) {
        window.clearInterval(stepTimer);
        setStep(0);
        setPhase('source');
        if (holdThenResume) forward(TIMING.tapHold);
      } else {
        setStep(next);
      }
    }, TIMING.backwardStep);
  };

  // Only a real pointer hovers; a tap would otherwise get stuck on source.
  const onEnter = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => backward(), TIMING.hoverDelay);
  };

  const onLeave = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(hoverTimer);
    if (step < total) forward(TIMING.resumeDelay);
  };

  // `click` doesn't reliably say which pointer made it (Safari), so remember
  // the type from the press that started it.
  let lastPointer = 'mouse';
  const onDown = (event: PointerEvent) => {
    lastPointer = event.pointerType;
  };

  const onTap = () => {
    if (lastPointer === 'mouse') return;
    // A long press that selected text isn't a tap.
    if (window.getSelection()?.isCollapsed === false) return;
    // Already on source: hold it a little longer. Otherwise run back to it.
    if (root.dataset.phase === 'source') forward(TIMING.tapHold);
    else backward(true);
  };

  setStep(0);
  setPhase('source');
  root.addEventListener('pointerenter', onEnter);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('pointerdown', onDown);
  root.addEventListener('click', onTap);
  forward(TIMING.initialDelay);

  return () => {
    stop();
    window.clearTimeout(hoverTimer);
    root.removeEventListener('pointerenter', onEnter);
    root.removeEventListener('pointerleave', onLeave);
    root.removeEventListener('pointerdown', onDown);
    root.removeEventListener('click', onTap);
  };
}
