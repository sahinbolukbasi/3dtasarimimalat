/**
 * 3D TASARIM & İMALAT - MÜHENDİSLİK ÇÖZÜMLERİ
 * Client-Side JavaScript
 * Author: Makine Mühendisi Ercan Bölükbaşı
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. CMS Site Ayarlarını (content/settings.json) Oku ve Sayfaya Uygula
  applySiteSettings();

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. WhatsApp Hızlı Teklif / İletişim Formu
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim() || '';
      const company = document.getElementById('formCompany')?.value.trim() || 'Belirtilmedi';
      const service = document.getElementById('formService')?.value || 'Genel Mühendislik';
      const phone = document.getElementById('formPhone')?.value.trim() || '';
      const message = document.getElementById('formMessage')?.value.trim() || '';

      // Google Analytics Event Trigger
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('generate_lead', {
          event_category: 'Contact',
          event_label: service,
          value: 1
        });
      }

      // WhatsApp formatlı mesaj oluşturma
      const text = 
`*3dtasarimimalat.com Teklif Talebi* 🛠️
-----------------------------------
👤 *Ad Soyad:* ${name}
🏢 *Firma / Sektör:* ${company}
📞 *Telefon:* ${phone}
⚙️ *Talep Edilen Hizmet:* ${service}
📝 *Proje Detayı:*
${message}
-----------------------------------
_Bu mesaj web sitesi teklif formundan iletilmiştir._`;

      const whatsappNumber = window.SITE_WHATSAPP_RAW || '905374686302';
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      // WhatsApp'a yönlendir
      window.open(whatsappUrl, '_blank');

      const statusBox = document.getElementById('formStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: rgba(37, 211, 102, 0.15); border: 1px solid #25d366; color: #86efac; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-size: 0.9rem;">
            ✓ Talebiniz hazırlandı ve WhatsApp üzerinden aktarılıyor! Görsel veya teknik çizimlerinizi WhatsApp penceresinden hemen ekleyebilirsiniz.
          </div>
        `;
      }
    });
  }

  // 4. Sol Alttaki WhatsApp Butonuna Tıklama Olayı
  const leftWhatsAppBtn = document.getElementById('stickyWhatsAppLeft');
  if (leftWhatsAppBtn) {
    leftWhatsAppBtn.addEventListener('click', () => {
      if (typeof window.trackEvent === 'function') {
        window.trackEvent('click_whatsapp', {
          event_category: 'Contact',
          event_label: 'Sticky Left WhatsApp Button'
        });
      }
    });
  }

  // 5. Dinamik Yıl Güncelleme
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 6. Blog Yazılarını Yükleme
  loadRecentBlogPosts();
});

/**
 * Sveltia CMS ile düzenlenen content/settings.json dosyasını okur
 * ve sitedeki ilgili tüm alanlara anında yansıtır.
 */
async function applySiteSettings() {
  try {
    // Cache bust ekleyerek her zaman en güncel ayarı çekiyoruz
    const res = await fetch(`content/settings.json?t=${Date.now()}`);
    if (!res.ok) return;
    const settings = await res.json();

    if (!settings) return;

    // Telefon
    if (settings.phone) {
      document.querySelectorAll('[data-cms="phone"], a[href^="tel:"]').forEach(el => {
        el.href = `tel:${settings.phone.replace(/[^0-9+]/g, '')}`;
        const span = el.querySelector('span:last-child') || el;
        span.textContent = settings.phone;
      });
      document.querySelectorAll('.contact-detail-item[href^="tel:"] .contact-detail-value').forEach(el => {
        el.textContent = settings.phone;
      });
    }

    // E-Posta
    if (settings.email) {
      document.querySelectorAll('[data-cms="email"], a[href^="mailto:"]').forEach(el => {
        el.href = `mailto:${settings.email}`;
        const span = el.querySelector('span:last-child') || el;
        span.textContent = settings.email;
      });
      document.querySelectorAll('.contact-detail-item[href^="mailto:"] .contact-detail-value').forEach(el => {
        el.textContent = settings.email;
      });
    }

    // WhatsApp
    if (settings.whatsapp) {
      const cleanWa = settings.whatsapp.replace(/[^0-9]/g, '');
      const fullWa = cleanWa.startsWith('90') ? cleanWa : (cleanWa.startsWith('0') ? '9' + cleanWa : '90' + cleanWa);
      window.SITE_WHATSAPP_RAW = fullWa;

      document.querySelectorAll('a[href*="wa.me/"]').forEach(el => {
        const oldHref = el.getAttribute('href');
        const textParam = oldHref.includes('text=') ? oldHref.split('text=')[1] : '';
        el.href = `https://wa.me/${fullWa}${textParam ? '?text=' + textParam : ''}`;
      });
      document.querySelectorAll('.contact-detail-item[href*="wa.me/"] .contact-detail-value').forEach(el => {
        el.textContent = settings.whatsapp;
      });
    }

    // Sloganlar
    if (settings.main_slogan) {
      document.querySelectorAll('.top-slogan-tag span:last-child').forEach(el => {
        el.textContent = `“${settings.main_slogan}”`;
      });
      document.querySelectorAll('.hero-subtitle').forEach(el => {
        el.textContent = `“${settings.main_slogan}”`;
      });
    }

    // Mühendis Adı / Unvanı
    if (settings.engineer_name) {
      document.querySelectorAll('#hakkimda h3').forEach(el => {
        el.textContent = `Merhaba, ben ${settings.engineer_name}.`;
      });
    }

  } catch (err) {
    console.debug('CMS settings auto-sync error:', err);
  }
}

/**
 * Blog Yazılarını Listeleme Fonksiyonu
 * Önce GitHub / content/posts üzerinden dinamik listeyi kontrol eder,
 * bulunamazsa posts.json dosyasından çeker.
 */
async function loadRecentBlogPosts() {
  const blogContainer = document.getElementById('recentBlogGrid');
  if (!blogContainer) return;

  try {
    const response = await fetch(`content/posts/posts.json?t=${Date.now()}`);
    if (!response.ok) throw new Error('Blog index json not found');
    const posts = await response.json();

    if (posts && posts.length > 0) {
      blogContainer.innerHTML = '';
      posts.slice(0, 3).forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card';

        const tagsHtml = (post.tags && post.tags.length > 0)
          ? `<div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
              ${post.tags.slice(0, 3).map(t => `<span style="background: rgba(224, 122, 44, 0.1); border: 1px solid rgba(224, 122, 44, 0.25); color: var(--accent-bronze-light); padding: 0.15rem 0.55rem; border-radius: 4px; font-size: 0.72rem; font-family: var(--font-mono);">#${escapeHtml(t)}</span>`).join('')}
             </div>`
          : '';

        card.innerHTML = `
          <div class="blog-thumb">
            <img src="${post.image || 'assets/images/cad-drafting.jpg'}" alt="${escapeHtml(post.title)}" loading="lazy">
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <span>📅 ${post.date}</span>
              <span>•</span>
              <span>🏷️ ${post.category || 'Mühendislik'}</span>
            </div>
            <h3 class="blog-card-title">${escapeHtml(post.title)}</h3>
            <p class="blog-card-desc">${escapeHtml(post.description)}</p>
            ${tagsHtml}
            <a href="blog/post.html?slug=${post.slug}" class="blog-read-more" style="margin-top: auto;">
              Devamını Oku <span>→</span>
            </a>
          </div>
        `;
        blogContainer.appendChild(card);
      });
    }
  } catch (err) {
    console.debug('Using fallback static blog cards', err);
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
