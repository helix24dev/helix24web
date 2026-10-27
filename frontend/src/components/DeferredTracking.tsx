'use client';

import { useEffect } from 'react';

const GTM_ID = 'GTM-T88B527H';
const META_PIXEL_ID = '1364676875854205';

// Google Tag Manager and the Meta Pixel are about 330 KB of script. They load on the visitor's first interaction
// (scroll, tap, click or key) or after 4 seconds, whichever comes first, so they never compete with the page itself.
// The PageView still fires for anyone who stays or interacts; only visits that leave within 4 seconds go untracked.
export default function DeferredTracking() {
  useEffect(() => {
    const events = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, load));
      window.clearTimeout(timer);
      loadGtm();
      loadMetaPixel();
    };
    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    const timer = window.setTimeout(load, 4000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, load));
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}

function addScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

// Standard GTM snippet
function loadGtm() {
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
}

// Standard Meta Pixel snippet (fbq queues calls until fbevents.js arrives)
function loadMetaPixel() {
  type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue: unknown[]; push: Fbq; loaded: boolean; version: string };
  const w = window as unknown as { fbq?: Fbq; _fbq?: Fbq };
  if (w.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  w.fbq = fbq;
  if (!w._fbq) w._fbq = fbq;
  addScript('https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}
