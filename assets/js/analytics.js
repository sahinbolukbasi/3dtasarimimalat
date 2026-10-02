/**
 * Google Analytics 4 (GA4) Integration
 * 3dtasarimimalat.com
 */

// Varsayılan Ölçüm Kimliği (Measurement ID)
window.GA_MEASUREMENT_ID = 'G-P3FHH5BRB6';

// dataLayer ve gtag fonksiyonunu senkron olarak anında tanımla
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
window.gtag = gtag;

gtag('js', new Date());

// Script yükleyici fonksiyon
function loadGoogleAnalytics(measurementId) {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX') return;

  // gtag config
  gtag('config', measurementId, {
    send_page_view: true
  });

  // Script zaten eklenmişse tekrar ekleme
  if (document.getElementById('ga-gtag-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

// 1. Önce doğrudan G-P3FHH5BRB6 ile Google Analytics'i başlat
loadGoogleAnalytics(window.GA_MEASUREMENT_ID);

// 2. content/settings.json içinden CMS ile değiştirilmiş güncel kimlik varsa senkronize et
(async function syncAnalyticsWithCMS() {
  try {
    const prefix = window.location.pathname.includes('/blog/') ? '../' : '';
    const res = await fetch(`${prefix}content/settings.json?t=${Date.now()}`);
    if (res.ok) {
      const settings = await res.json();
      if (settings && settings.ga_id && settings.ga_id !== 'G-XXXXXXXXXX' && settings.ga_id !== window.GA_MEASUREMENT_ID) {
        window.GA_MEASUREMENT_ID = settings.ga_id;
        loadGoogleAnalytics(settings.ga_id);
      }
    }
  } catch (e) {
    // Sessizce geç
  }
})();

/**
 * Özel Olay Takibi Yardımcısı (Custom Event Tracker)
 * @param {string} eventName 
 * @param {object} eventParams 
 */
window.trackEvent = function(eventName, eventParams = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
};

