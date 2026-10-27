// Search Console verification. The tracking scripts themselves (GTM, Meta Pixel) load after the page is in use,
// from DeferredTracking in the root layout.
export default function TrackingScripts() {
  return <meta name="google-site-verification" content="0rlXXnq2Fz1242vAXUJyC9oIb11sosDtrRLr1nYJbOA" />;
}
