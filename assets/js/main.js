/* Yog Gram — shared layout + interactions */
const SITE = {
  name: "Yog Gram",
  full: "Yog Naturopathy Panchkarma Treatment & Research Centre",
  phone: "+91 8954666222",
  phoneRaw: "918954666222",
  emails: ["onlineyoggram@divyayoga.com", "yoggram@patanjaliyoggram.com"],
  hours: "06:00 AM – 10:00 PM",
  addr: "Village Aurangabad, Near SIDCUL, Roshnabad, Haridwar, Uttarakhand, India – 249402",
  corp: "Patanjali Yogpeeth, Maharishi‑Haridwar, National Highway‑58, Near Bahadrabad, Haridwar, Uttarakhand – 249405",
  web: "https://www.yoggram.divyayoga.com"
};

const ICON = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.9 17.8L.2 24l6.3-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z"/></svg>',
  up: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.8.2-1.3 1.4-1.3H17V1.2C16.7 1.1 15.6 1 14.4 1 11.8 1 10 2.6 10 5.5V8H7v3.6h3V23h4v-11.4h3.1l.5-3.6H14z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z"/></svg>'
};

const NAV = [
  ["index.html", "Home", "home"],
  ["about.html", "About", "about"],
  ["therapies.html", "Therapies", "therapies"],
  ["stay.html", "Stay & Pricing", "stay"],
  ["contact.html", "Book & Contact", "contact"]
];

function renderChrome() {
  const page = document.body.dataset.page;
  const links = NAV.map(([h, l, k]) => `<li><a href="${h}" class="${k === page ? "active" : ""}">${l}</a></li>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <div class="topbar"><div class="container">
    <div class="tb-left">
      <a href="tel:${SITE.phoneRaw}">${ICON.phone}${SITE.phone}</a>
      <a href="mailto:${SITE.emails[0]}">${ICON.mail}${SITE.emails[0]}</a>
    </div>
    <div class="tb-right"><span>${ICON.clock}Open daily · ${SITE.hours}</span><span class="hindi">॥ योगग्राम, हरिद्वार ॥</span></div>
  </div></div>
  <header class="nav" id="nav"><div class="container">
    <a href="index.html" class="brand" aria-label="Yog Gram home">
      <img src="assets/img/yg-logo.webp" alt="Yog Gram logo">
      <div class="brand-text"><strong>Yog Gram</strong><span>Haridwar · Since Nature</span></div>
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-cta">
      <a href="contact.html#book" class="btn btn-primary">Book a Stay ${ICON.arrow}</a>
      <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div></header>`);

  document.body.insertAdjacentHTML("beforeend", `
  <footer class="footer"><div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="brand"><img src="assets/img/yg-logo.webp" alt=""><div class="brand-text"><strong>Yog Gram</strong><span>Haridwar, Uttarakhand</span></div></a>
        <p style="margin-top:20px">${SITE.full} — where Yoga, Ayurveda, Naturopathy and Panchakarma come together for lasting, drug‑free healing in the foothills of the Shivaliks.</p>
        <div class="socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">${ICON.fb}</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">${ICON.yt}</a>
          <a href="https://x.com/" target="_blank" rel="noopener" aria-label="X">${ICON.x}</a>
        </div>
      </div>
      <div><h4>Explore</h4><ul>${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}<li><a href="therapies.html#prakriti">Prakriti Analyzer</a></li></ul></div>
      <div><h4>Visit Us</h4><ul>
        <li><b style="color:#fff">Yog Gram Campus</b><br>${SITE.addr}</li>
        <li><b style="color:#fff">Corporate Office</b><br>${SITE.corp}</li>
      </ul></div>
      <div><h4>Reach Out</h4><ul>
        <li><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
        ${SITE.emails.map(e => `<li><a href="mailto:${e}">${e}</a></li>`).join("")}
        <li>${SITE.hours}, all days</li>
      </ul>
      <form class="newsletter" onsubmit="event.preventDefault();this.innerHTML='<span style=\\'padding:10px 16px;color:#fff\\'>🙏 Thank you! We\\'ll keep you posted.</span>'">
        <input type="email" required placeholder="Your email for wellness tips"><button>Join</button>
      </form></div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Yog Gram, Haridwar. A unit of Patanjali Yogpeeth.</span>
      <span>Beware of fraud calls — book only via official channels.</span>
    </div>
  </div></footer>
  <a class="fab-wa" href="https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent("Namaste! I would like to know more about Yog Gram.")}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
  <button class="to-top" aria-label="Back to top">${ICON.up}</button>
  <div class="lightbox" id="lightbox"><button class="lb-btn lb-close" aria-label="Close">✕</button><button class="lb-btn lb-prev" aria-label="Previous">‹</button><img alt=""><button class="lb-btn lb-next" aria-label="Next">›</button></div>`);
}

function initInteractions() {
  const nav = document.getElementById("nav");
  const toTop = document.querySelector(".to-top");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  nav.querySelector(".burger").addEventListener("click", () => nav.classList.toggle("open"));

  // Reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // Counters
  const co = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
    let t0 = null;
    const step = ts => {
      t0 ??= ts;
      const p = Math.min((ts - t0) / 1600, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    co.unobserve(el);
  }), { threshold: .5 });
  document.querySelectorAll("[data-count]").forEach(el => co.observe(el));

  // Accordion
  document.querySelectorAll(".acc button").forEach(b => b.addEventListener("click", () => {
    const acc = b.parentElement, panel = acc.querySelector(".panel");
    const open = acc.classList.toggle("open");
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : 0;
  }));

  // Filter chips
  document.querySelectorAll(".chips").forEach(group => {
    group.addEventListener("click", e => {
      const chip = e.target.closest(".chip"); if (!chip) return;
      group.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === chip));
      const f = chip.dataset.filter;
      document.querySelectorAll(group.dataset.target + " .filter-item").forEach(it =>
        it.classList.toggle("hide", f !== "all" && !it.dataset.cat.includes(f)));
    });
  });

  // Lightbox
  const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
  const items = [...document.querySelectorAll("[data-lightbox]")];
  let idx = 0;
  const show = i => { idx = (i + items.length) % items.length; lbImg.src = items[idx].getAttribute("href"); lb.classList.add("show"); };
  items.forEach((a, i) => a.addEventListener("click", e => { e.preventDefault(); show(i); }));
  lb.querySelector(".lb-close").onclick = () => lb.classList.remove("show");
  lb.querySelector(".lb-prev").onclick = () => show(idx - 1);
  lb.querySelector(".lb-next").onclick = () => show(idx + 1);
  lb.addEventListener("click", e => { if (e.target === lb) lb.classList.remove("show"); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("show")) return;
    if (e.key === "Escape") lb.classList.remove("show");
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
}

renderChrome();
document.addEventListener("DOMContentLoaded", initInteractions);
