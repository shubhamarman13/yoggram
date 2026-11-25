/* Yog Mitra — on-page wellness assistant (runs fully in the browser, no server needed) */
(() => {
  const BOT_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.5 2-1.5 4 0 6 1.5-2 1.5-4 0-6z"/><path d="M5 10c1 2.5 3 3.5 7 3.5s6-1 7-3.5"/><path d="M4 15c2 3 4.5 4.5 8 4.5s6-1.5 8-4.5"/></svg>';
  const SEND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';

  const tel = `<a href="tel:${SITE.phoneRaw}">${SITE.phone}</a>`;
  const wa = `<a href="https://wa.me/${SITE.phoneRaw}" target="_blank" rel="noopener">WhatsApp</a>`;

  const DISEASES = {
    "diabetes|sugar|madhumeh": ["Diabetes", "Yoga therapy (Mandukasana, Kapalbhati), diet therapy, Panchakarma detox and naturopathy"],
    "obesity|weight|motapa|fat": ["Obesity / weight management", "Diet therapy, Shatkarma, mud & hydrotherapy, daily yoga and Ayurvedic support"],
    "bp|blood pressure|hypertension": ["High blood pressure", "Pranayama (Anulom‑Vilom, Bhramari), meditation, Shirodhara and salt‑controlled diet"],
    "arthritis|joint|knee|gathiya": ["Arthritis & joint pain", "Abhyanga, Potli massage, physiotherapy, acupressure and Janu Basti"],
    "back|spine|spondylitis|slip disc|sciatica|kamar": ["Back & spine problems", "Kati Basti, physiotherapy, acupuncture and therapeutic yoga"],
    "stress|anxiety|depression|insomnia|sleep|tension|neend": ["Stress, anxiety & sleep issues", "Shirodhara, meditation, Yoga Nidra, Pranayama and Havan therapy"],
    "thyroid": ["Thyroid disorders", "Ujjayi pranayama, Sarvangasana‑based yoga, diet therapy and Ayurvedic care"],
    "skin|psoriasis|eczema|acne": ["Skin conditions", "Panchakarma detox, Jalauka (leech) therapy, mud therapy and blood‑purifying diet"],
    "asthma|breath|allergy|sinus|saans": ["Asthma & respiratory issues", "Jal Neti, Pranayama, steam therapy and Shatkarma cleansing"],
    "digest|gas|acidity|constipation|ibs|liver|pet": ["Digestive & liver disorders", "Basti, liver & gall‑bladder cleansing, colon therapy, diet therapy and yoga"],
    "pcod|pcos|period|menstrual|women": ["PCOD / women's health", "Yoga therapy, diet correction, Panchakarma and Ayurvedic support"],
    "heart|cholesterol|cardiac": ["Heart health & cholesterol", "Gentle yoga, Pranayama, meditation and heart‑friendly naturopathic diet"],
    "migraine|headache|sir dard": ["Migraine & headaches", "Shirodhara, Nasya, acupressure and relaxation therapy"],
    "paralysis|stroke|nerve|neuro": ["Neurological conditions", "Physiotherapy, Abhyanga, acupuncture and Panchakarma under supervision"]
  };

  const INTENTS = [
    { k: ["hello", "hi", "hey", "namaste", "namaskar", "pranam", "good morning", "hii"], a: () =>
      `🙏 Namaste! I'm <b>Yog Mitra</b>, Yog Gram's wellness assistant. I can help you with therapies, room tariffs, cost estimates, booking steps, timings and directions. What would you like to know?` },
    { k: ["what is yog gram", "about", "yoggram", "yog gram", "centre", "center", "who are you", "kya hai"], a: () =>
      `<b>Yog Gram</b> (Yog Naturopathy Panchkarma Treatment & Research Centre) in Haridwar is a holistic healing centre of Patanjali Yogpeeth. It combines <b>Yoga, Ayurveda, Naturopathy & Panchakarma</b> under medical supervision for drug‑free treatment of lifestyle and chronic diseases. <a href="about.html">Read more →</a>` },
    { k: ["therapy", "therapies", "treatment", "treatments", "panchakarma", "naturopathy", "ayurveda", "upchar", "ilaj"], a: () =>
      `Therapies offered at Yog Gram include:<ul><li>Yoga therapy (mandatory, morning & evening)</li><li>Panchakarma – Abhyanga, Shirodhara, Basti</li><li>Naturopathy – mud, hydro & sun therapy</li><li>Ayurveda & diet therapy</li><li>Acupressure, acupuncture, physiotherapy</li><li>Shatkarma, Jalauka (leech) & Shringi</li></ul><a href="therapies.html">Explore all therapies →</a>` },
    { k: ["price", "cost", "tariff", "charges", "fees", "rate", "kitna", "paisa", "kharcha", "budget", "expensive"], a: () =>
      `Per‑day charges (room + treatment, therapies & medicated diet):<ul>${ROOMS.map(r => `<li>${r.name}: <b>${inr(r.room + r.treat)}</b></li>`).join("")}</ul>Plus one‑time registration ${inr(REG_FEE)}/person. Minimum stay ${MIN_DAYS} days.<br>💡 Try asking: <i>"cost of Tapasvi for 10 days"</i>` },
    { k: ["room", "rooms", "cottage", "accommodation", "stay", "rehna", "kamra", "ac"], a: () =>
      `We have four cottage categories: <b>Rajrishi</b> (premium, 2 ACs, drawing room), <b>Maharishi</b> (AC, sofa set), <b>Tapasvi</b> (cooler) and <b>Nisarg</b> (AC, budget). All have attached western toilets, geysers and electric kettles. <a href="stay.html">Compare cottages →</a>` },
    { k: ["book", "booking", "reserve", "admission", "register", "registration", "ipd", "appointment", "how to join"], a: () =>
      `Booking in 3 simple steps:<ul><li>Register to get your <b>MR Number</b></li><li>Submit an <b>IPD booking request</b></li><li>Book your room once the team approves</li></ul>You can start right here: <a href="contact.html#book">Booking enquiry form →</a> or call ${tel}.` },
    { k: ["minimum", "how many days", "duration", "kitne din", "days"], a: () =>
      `The minimum stay at Yog Gram is <b>${MIN_DAYS} days</b>. Doctors usually recommend 7–21 days depending on the condition.` },
    { k: ["include", "included", "inclusive", "meal", "food", "diet", "khana", "bhojan"], a: () =>
      `Your package includes <b>accommodation, all meals (medicated sattvic diet) and all doctor‑prescribed therapies</b>. Extra: treatment kit, blood tests, medicines and special therapies like colon therapy, ozone therapy, vibro massage, coffee enema, liver cleansing, papaya face pack & Kesh Kanti Lep.` },
    { k: ["cancel", "cancellation", "refund", "money back", "wapas"], a: () =>
      `Cancellation policy:<ul><li>15+ days before arrival → 50% deducted</li><li>Within 15 days → no refund</li><li>No refund for early departure, no‑show, or if only one of two guests arrives</li></ul>` },
    { k: ["time", "timing", "timings", "open", "hours", "contact hours", "samay"], a: () =>
      `Our helpline is open <b>every day, ${SITE.hours}</b>. Yoga sessions run every morning and evening for all health seekers.` },
    { k: ["schedule", "routine", "daily", "dincharya", "wake"], a: () =>
      `A typical day: 🌅 early rise & yoga/pranayama → 🍵 herbal drink → 🌿 doctor consultation & therapies → 🥗 sattvic lunch → 💆 afternoon therapies → 🧘 evening yoga, havan & satsang → 🌙 early night. <a href="about.html#routine">See the full routine →</a>` },
    { k: ["contact", "phone", "call", "number", "mobile", "email", "mail", "whatsapp"], a: () =>
      `📞 ${tel} (${SITE.hours})<br>✉️ <a href="mailto:${SITE.emails[0]}">${SITE.emails[0]}</a><br>✉️ <a href="mailto:${SITE.emails[1]}">${SITE.emails[1]}</a><br>💬 Chat on ${wa}` },
    { k: ["address", "location", "where", "reach", "direction", "map", "kahan", "railway", "airport", "station", "how to come"], a: () =>
      `📍 <b>Yog Gram:</b> ${SITE.addr}<br><br>🚉 Nearest railway: Haridwar Junction<br>✈️ Nearest airport: Jolly Grant Airport, Dehradun<br><a href="contact.html#map">Open map →</a>` },
    { k: ["corporate", "office", "patanjali yogpeeth", "head office"], a: () => `🏢 <b>Corporate Office:</b> ${SITE.corp}` },
    { k: ["yoga", "asana", "pranayama", "meditation", "dhyan", "kapalbhati"], a: () =>
      `Yoga is the heart of Yog Gram 🧘. Attending morning and evening yoga is <b>mandatory</b> for all health seekers, as it multiplies the effect of Panchakarma and naturopathy. Sessions are adapted to each person's condition.` },
    { k: ["fraud", "fake", "scam", "bank", "payment", "pay"], a: () =>
      `⚠️ Please beware of fraudulent calls and messages. Make payments only through official Yog Gram / Patanjali Wellness channels and verify by calling ${tel} before paying.` },
    { k: ["prakriti", "dosha", "vata", "pitta", "kapha", "body type", "quiz"], a: () =>
      `Discover your Ayurvedic body type with our <a href="therapies.html#prakriti">Prakriti Analyzer</a> — 6 quick questions and you'll get your dominant dosha with personalised wellness tips.` },
    { k: ["thank", "thanks", "dhanyavad", "shukriya", "ok", "great", "nice"], a: () => `🙏 You're most welcome! Wishing you good health. Ask me anything else anytime.` },
    { k: ["bye", "goodbye", "alvida"], a: () => `🙏 Hari Om! Take care and stay healthy.` }
  ];

  const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  function costAnswer(q) {
    const days = +(q.match(/(\d{1,3})\s*(day|din|night|d\b)/) || [])[1] || null;
    let room = null;
    if (/rajrishi|rajrishi|premium|luxury/.test(q)) room = ROOMS[0];
    else if (/maharishi/.test(q)) room = /(1|one|single|ek|akela)\s*(person|people|guest|adult)|single/.test(q) ? ROOMS[2] : ROOMS[1];
    else if (/tapasvi|tapasvi|tapaswi/.test(q)) room = ROOMS[3];
    else if (/nisarg|cheap|budget|lowest/.test(q)) room = ROOMS[4];
    if (!room && !days) return null;
    if (!room) return `For ${days} days, estimated totals (excluding registration):<ul>${ROOMS.map(r => `<li>${r.name}: <b>${inr((r.room + r.treat) * Math.max(days, MIN_DAYS))}</b></li>`).join("")}</ul>${days < MIN_DAYS ? `<i>Note: minimum stay is ${MIN_DAYS} days, so I calculated ${MIN_DAYS}.</i>` : ""}`;
    const d = Math.max(days || MIN_DAYS, MIN_DAYS);
    const persons = room.id === "maharishi2" ? 2 : 1;
    const total = (room.room + room.treat) * d + REG_FEE * persons;
    return `🧮 <b>${room.name}</b> for <b>${d} days</b>:<ul><li>Room: ${inr(room.room)} × ${d} = ${inr(room.room * d)}</li><li>Treatment, therapies & diet: ${inr(room.treat)} × ${d} = ${inr(room.treat * d)}</li><li>Registration: ${inr(REG_FEE * persons)}</li></ul>Estimated total: <b>${inr(total)}</b><br><small>Medicines, tests & special therapies are extra. ${!days || days < MIN_DAYS ? `Minimum stay is ${MIN_DAYS} days.` : ""}</small><br><a href="contact.html#book">Book this →</a>`;
  }

  function diseaseAnswer(q) {
    for (const [keys, [name, plan]] of Object.entries(DISEASES)) {
      if (keys.split("|").some(k => new RegExp(`\\b${k}`).test(q)))
        return `🌿 For <b>${name}</b>, Yog Gram's doctors typically combine: <b>${plan}</b>.<br><br>Your exact plan is prescribed after a personal consultation. Recommended stay: 7–21 days. <a href="contact.html#book">Request a consultation →</a><br><small>This is general information, not medical advice.</small>`;
    }
    return null;
  }

  function reply(raw) {
    const q = norm(raw);
    if (!q) return "Please type a question 🙂";
    if (/(cost|price|kitna|charge|total|estimate|calculate|kharcha)/.test(q) || /\d+\s*(day|din)/.test(q)) {
      const c = costAnswer(q); if (c) return c;
    }
    const d = diseaseAnswer(q); if (d) return d;
    let best = null, score = 0;
    for (const it of INTENTS) {
      let s = 0;
      for (const k of it.k) {
        const re = new RegExp(k.length <= 3 ? `\\b${k}\\b` : `\\b${k}`);
        if (re.test(q)) s += k.includes(" ") ? 3 : k.length > 4 ? 2 : 1;
      }
      if (s > score) { score = s; best = it; }
    }
    if (best) return best.a();
    return `I'm not fully sure about that 🤔 — our team will be happy to help. Call ${tel} (${SITE.hours}) or message us on ${wa}. You can also ask me about <i>therapies, prices, rooms, booking, timings or a specific health condition</i>.`;
  }

  // ---------- UI ----------
  document.body.insertAdjacentHTML("beforeend", `
  <button class="bot-launch" aria-label="Open Yog Mitra assistant"><span class="av">${BOT_SVG}</span><span class="lbl"><b>Ask Yog Mitra</b><small>AI wellness assistant</small></span></button>
  <div class="bot" role="dialog" aria-label="Yog Mitra chat">
    <div class="bot-head"><span class="av">${BOT_SVG}</span><div><b>Yog Mitra</b><small>Online · replies instantly</small></div><button class="x" aria-label="Close">✕</button></div>
    <div class="bot-body" id="botBody"></div>
    <div class="quick" id="botQuick"></div>
    <form class="bot-foot" id="botForm"><input id="botIn" autocomplete="off" placeholder="Ask about therapies, prices, rooms…"><button aria-label="Send">${SEND_SVG}</button></form>
    <div class="bot-note">Yog Mitra gives general guidance · not a substitute for a doctor</div>
  </div>`);

  const launch = document.querySelector(".bot-launch"), box = document.querySelector(".bot");
  const body = document.getElementById("botBody"), quick = document.getElementById("botQuick");
  const form = document.getElementById("botForm"), input = document.getElementById("botIn");
  const QUICK = ["Therapies offered", "Room prices", "Cost for 7 days in Tapasvi", "Help for diabetes", "How to book?", "Location"];
  let history = [];
  try { history = JSON.parse(sessionStorage.getItem("ygBot") || "[]"); } catch (e) { history = []; }
  const save = () => { try { sessionStorage.setItem("ygBot", JSON.stringify(history.slice(-30))); } catch (e) {} };

  const add = (html, who, persist = true) => {
    const m = document.createElement("div");
    m.className = "msg " + (who === "u" ? "user-m" : "bot-m");
    m.innerHTML = html;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
    if (persist) { history.push([who, html]); save(); }
  };
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function ask(text) {
    add(esc(text), "u");
    const t = document.createElement("div");
    t.className = "msg bot-m typing"; t.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(t); body.scrollTop = body.scrollHeight;
    setTimeout(() => { t.remove(); add(reply(text), "b"); }, 550 + Math.random() * 500);
  }

  quick.innerHTML = QUICK.map(q => `<button type="button">${q}</button>`).join("");
  quick.addEventListener("click", e => { if (e.target.tagName === "BUTTON") ask(e.target.textContent); });
  form.addEventListener("submit", e => { e.preventDefault(); const v = input.value.trim(); if (v) { ask(v); input.value = ""; } });

  const open = () => {
    box.classList.add("open");
    if (!body.children.length) {
      if (history.length) history.forEach(([w, h]) => add(h, w, false));
      else add(INTENTS[0].a(), "b");
    }
    setTimeout(() => input.focus(), 300);
  };
  launch.addEventListener("click", () => box.classList.contains("open") ? box.classList.remove("open") : open());
  box.querySelector(".x").addEventListener("click", () => box.classList.remove("open"));
  window.openYogMitra = q => { open(); if (q) setTimeout(() => ask(q), 350); };
})();
