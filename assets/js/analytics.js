/**
 * Google Analytics 4 (GA4) Integration
 * 3dtasarimimalat.com
 */

// NOT: Lütfen 'G-XXXXXXXXXX' kısmını Google Analytics'ten aldığınız Ölçüm Kimliği (Measurement ID) ile değiştiriniz.
window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

(function() {
  if (!window.GA_MEASUREMENT_ID || window.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.info('Google Analytics: Ölçüm kimliği (G-XXXXXXXXXX) tanımlanmadı. Lütfen analytics.js dosyasında kimliğinizi giriniz.');
    // Geliştirme ortamında console'a loglama yapabilen sahte gtag oluşturuyoruz
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
      // console.log('[GA4 Debug Event]:', arguments);
    };
    return;
  }

  // Google Analytics scriptini dinamik olarak yükle
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', window.GA_MEASUREMENT_ID, {
    send_page_view: true
  });
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
