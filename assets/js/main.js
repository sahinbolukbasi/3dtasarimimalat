/**
 * 3D TASARIM & İMALAT - MÜHENDİSLİK ÇÖZÜMLERİ
 * Client-Side JavaScript
 * Author: Makine Mühendisi Ercan Bölükbaşı
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Menüdeki bir linke tıklandığında menüyü kapat
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. WhatsApp Hızlı Teklif / İletişim Formu
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

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/905374686302?text=${encodedText}`;

      // WhatsApp'a yönlendir
      window.open(whatsappUrl, '_blank');

      // Kullanıcıya teşekkür bildirimi
      const statusBox = document.getElementById('formStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: rgba(37, 211, 102, 0.15); border: 1px solid #25d366; color: #86efac; padding: 1rem; border-radius: 8px; margin-top: 1rem; font-size: 0.9rem;">
            ✓ Talebiniz hazırlandı ve WhatsApp üzerinden Ercan Bölükbaşı'na aktarılıyor! Görsel veya teknik çizimlerinizi WhatsApp penceresinden hemen ekleyebilirsiniz.
          </div>
        `;
      }
    });
  }

  // 3. Sol Alttaki WhatsApp Butonuna Tıklama Olayı (Analytics Event)
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

  // 4. Dinamik Yıl Güncelleme
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 5. Blog Yazılarını Yükleme (content/posts/posts.json varsa dinamik çeker)
  loadRecentBlogPosts();
});

// Blog Yazılarını Listeleme Fonksiyonu
async function loadRecentBlogPosts() {
  const blogContainer = document.getElementById('recentBlogGrid');
  if (!blogContainer) return;

  try {
    const response = await fetch('content/posts/posts.json');
    if (!response.ok) throw new Error('Blog index json not found');
    const posts = await response.json();

    if (posts && posts.length > 0) {
      blogContainer.innerHTML = '';
      posts.slice(0, 3).forEach(post => {
        const card = document.createElement('article');
        card.className = 'blog-card';
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
            <a href="blog/post.html?slug=${post.slug}" class="blog-read-more">
              Devamını Oku <span>→</span>
            </a>
          </div>
        `;
        blogContainer.appendChild(card);
      });
    }
  } catch (err) {
    // Statik fallback içerik zaten HTML'de render edilmişse dokunma
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
