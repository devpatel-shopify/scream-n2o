// Replace no-js with js
document.documentElement.className =
  document.documentElement.className.replace('no-js', 'js');

// Shopify design mode check (safe)
if (window.Shopify && Shopify.designMode) {
  document.documentElement.classList.add('shopify-design-mode');
}

// Viewport CSS variables (safe)
if (window.visualViewport) {
  document.documentElement.style.setProperty(
    '--viewport-height',
    `${window.visualViewport.height}px`
  );
  document.documentElement.style.setProperty(
    '--viewport-width',
    `${window.visualViewport.width}px`
  );
}

// Detect OS & Browser
function getBrowserDetails() {
  const html = document.documentElement;
  const ua = navigator.userAgent;

  /* ---------- OS Detection ---------- */
  if (/Android/i.test(ua)) {
    html.classList.add('android');
  } else if (/Macintosh|Mac OS X/i.test(ua)) {
    html.classList.add('mac');
  } else {
    html.classList.add('windows');
  }

  /* ---------- Browser Detection ---------- */
  const isOpera =
    (!!window.opr && !!window.opr.addons) ||
    !!window.opera ||
    ua.indexOf(' OPR/') >= 0;

  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isIE = !!document.documentMode;
  const isEdgeChromium = ua.indexOf('Edg') !== -1;
  const isChrome = !!window.chrome && !isEdgeChromium;
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(ua);

  if (isFirefox) {
    html.classList.add('isFirefox');
  } else if (isEdgeChromium) {
    html.classList.add('isEdgeChromium');
  } else if (isChrome) {
    html.classList.add('isChrome');
  } else if (isSafari) {
    html.classList.add('isSafari');
  } else if (isOpera) {
    html.classList.add('isOpera');
  } else if (isIE) {
    html.classList.add('isIE');
  }
}

// Run browser detection
getBrowserDetails();

/* ---------- Mobile Detection ---------- */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.documentElement.classList.add('mobile');
}
