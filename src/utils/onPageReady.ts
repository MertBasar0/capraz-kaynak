/**
 * Runs `initFn` immediately once the DOM is parsed (without waiting for `window.load`
 * or slow external scripts/images) AND re-runs it after every Astro `<ClientRouter />`
 * page swap, while preventing duplicate execution on the initial `astro:page-load` event.
 */
export function onPageReady(initFn: () => void): void {
  let ranForCurrentDocument = false;

  const runOnce = () => {
    if (ranForCurrentDocument) return;
    ranForCurrentDocument = true;
    initFn();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runOnce, { once: true });
  } else {
    runOnce();
  }

  document.addEventListener('astro:before-swap', () => {
    ranForCurrentDocument = false;
  });

  document.addEventListener('astro:page-load', () => {
    runOnce();
  });
}
