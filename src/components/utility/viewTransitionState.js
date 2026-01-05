// viewTransitionState.js
export let isViewTransitioning = false;

export function withViewTransition(cb) {
  if (!document.startViewTransition) {
    cb();
    return;
  }

  isViewTransitioning = true;

  document.startViewTransition(() => {
    cb();
  }).finished.finally(() => {
    isViewTransitioning = false;
  });
}
