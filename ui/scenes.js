/* =====================================================================
   INTERFACE — Illustrations d'ambiance (SVG génératif)
   Utilisées uniquement tant qu'aucune photo n'est fournie dans
   content/images.js. Palette dérivée du logo : olive profond + cuivre.
   ===================================================================== */
(function () {
  const W = 1600, H = 1000;
  const C = {
    ink: "#15140A", olive: "#2A2912", olive2: "#3A3818", copper: "#D8843A",
    glow: "#F3B870", warm: "#FFD9A0", cream: "#F4EEE2", linen: "#FBF7EF",
    water1: "#3F7472", water2: "#24504F", water3: "#143334"
  };
  let uidN = 0;

  function rng(seed) {
    let s = 0;
    for (const ch of String(seed)) s = (s * 31 + ch.charCodeAt(0)) >>> 0;
    s = s || 1;
    return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  }
  const f = (n) => Math.round(n * 10) / 10;
  const rect = (x, y, w, h, fill, extra = "") => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" fill="${fill}" ${extra}/>`;
  const circ = (x, y, r, fill, extra = "") => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${fill}" ${extra}/>`;
  const poly = (pts, fill, extra = "") => `<polygon points="${pts.map((p) => p.map(f).join(",")).join(" ")}" fill="${fill}" ${extra}/>`;

  function lin(id, stops, x2 = 0, y2 = 1) {
    return `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops
      .map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join("")}</linearGradient>`;
  }
  function rad(id, color, a = 1) {
    return `<radialGradient id="${id}"><stop offset="0" stop-color="${color}" stop-opacity="${a}"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient>`;
  }
  const glowAt = (id, x, y, r) => circ(x, y, r, `url(#${id})`);

  function palm(x, y, h, lean, fill, r) {
    const tx = x + lean, ty = y - h;
    let s = `<path d="M${f(x)} ${f(y)} Q${f(x + lean * 0.15)} ${f(y - h * 0.55)} ${f(tx)} ${f(ty)}" stroke="${fill}" stroke-width="${f(h * 0.035)}" fill="none" stroke-linecap="round"/>`;
    const angs = [150, 175, 200, 228, 255, 285, 315, 342, 8, 30];
    for (const a0 of angs) {
      const a = (a0 + (r() - 0.5) * 14) * Math.PI / 180;
      const L = h * (0.38 + r() * 0.14);
      const ex = tx + Math.cos(a) * L, ey = ty + Math.sin(a) * L + L * 0.32;
      const mx = (tx + ex) / 2, my = (ty + ey) / 2 - L * 0.12;
      const nx = -(ey - ty) / L, ny = (ex - tx) / L, w = L * 0.16;
      s += `<path d="M${f(tx)} ${f(ty)} Q${f(mx + nx * w)} ${f(my + ny * w)} ${f(ex)} ${f(ey)} Q${f(mx - nx * w * 0.25)} ${f(my - ny * w * 0.25)} ${f(tx)} ${f(ty)}Z" fill="${fill}"/>`;
    }
    return s + circ(tx, ty, h * 0.03, fill);
  }

  function skyline(y, r, fill, lit, minH = 14, maxH = 60) {
    let s = "", x = -20;
    while (x < W + 20) {
      const w = 40 + r() * 70, h = minH + r() * (maxH - minH);
      s += rect(x, y - h, w, h + 2, fill);
      if (lit) for (let i = 0; i < 3; i++) if (r() > 0.45) s += rect(x + 6 + r() * (w - 14), y - h + 6 + r() * (h - 12), 3, 3, lit, `opacity="${f(0.4 + r() * 0.6)}"`);
      x += w + r() * 10;
    }
    return s;
  }

  /* ---------- Façade (hero) ---------- */
  function facade(id, night) {
    const r = rng("facade" + (night ? "n" : ""));
    const hz = 740;
    let d = lin(id + "sky", night
      ? [[0, "#07070A"], [0.55, "#16140B"], [1, "#43301A"]]
      : [[0, "#121109"], [0.45, "#302B12"], [0.78, "#87521F"], [1, "#DC8E45"]]);
    d += rad(id + "sun", night ? "#C77A35" : "#F7B66C", night ? 0.35 : 0.85);
    d += rad(id + "win", C.warm, 0.9);
    d += lin(id + "water", [[0, "#1D3B3B"], [1, "#0B1615"]]);
    d += lin(id + "door", [[0, C.warm], [1, C.copper]]);
    let s = rect(0, 0, W, H, `url(#${id}sky)`);
    s += glowAt(id + "sun", 1160, hz - 10, 620);
    if (night) for (let i = 0; i < 70; i++) s += circ(r() * W, r() * 420, r() * 1.6 + 0.4, "#F4EEE2", `opacity="${f(0.2 + r() * 0.6)}"`);
    else s += circ(1160, hz - 30, 70, "#FBD29A", 'opacity="0.55"');
    s += skyline(hz, r, night ? "#0F0E08" : "#1E1A0B", night ? C.glow : null);
    s += palm(840, hz, 260, -20, "#15130A", r) + palm(1420, hz, 230, 25, "#15130A", r);
    // wings
    const wing = (x0, x1) => {
      let w = rect(x0, 440, x1 - x0, hz - 440, "#1F1C0D");
      w += rect(x0 - 8, 432, x1 - x0 + 16, 10, "#3A3518");
      for (let row = 0; row < 6; row++) {
        w += rect(x0, 440 + row * 50 + 46, x1 - x0, 4, "#2E2A13");
        for (let col = 0; col < 5; col++) {
          const on = r() > (night ? 0.3 : 0.42);
          w += rect(x0 + 18 + col * ((x1 - x0 - 36) / 5), 450 + row * 50, (x1 - x0 - 36) / 5 - 12, 34,
            on ? C.glow : "#2B2713", on ? `opacity="${f(0.5 + r() * 0.5)}"` : "");
        }
      }
      return w;
    };
    s += wing(760, 985) + wing(1235, 1460);
    // central tower echoing the logo
    const tx0 = 985, tx1 = 1235, n = 9, bw = 16, gap = (tx1 - tx0 - n * bw) / (n - 1);
    s += rect(tx0, 230, tx1 - tx0, hz - 230, "#171509");
    for (let i = 0; i < n - 1; i++) {
      const x = tx0 + i * (bw + gap) + bw;
      const top = 214 + Math.max(Math.abs(i - 3.5) - 0.5, 0) * 16;
      s += rect(x + 2, top + 30, gap - 4, hz - top - 110, C.glow, `opacity="${f(0.18 + r() * 0.4)}"`);
    }
    for (let i = 0; i < n; i++) {
      const x = tx0 + i * (bw + gap), top = 200 + Math.abs(i - 4) * 16;
      s += rect(x, top, bw, hz - top, "#2E2B13");
      s += rect(x, top, 3, hz - top, C.copper, `opacity="${night ? 0.25 : 0.45}"`);
      if (i === 4) s += poly([[x - 4, top], [x + bw / 2, top - 30], [x + bw + 4, top]], "#2E2B13");
    }
    s += `<path d="M1082 ${hz} V670 a28 28 0 0 1 56 0 V${hz}Z" fill="url(#${id}door)"/>`;
    s += glowAt(id + "win", 1110, 690, 120);
    s += `<path d="M880 632 Q1110 578 1340 632" stroke="${C.copper}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    // ground + reflecting pool
    s += rect(0, hz, W, H - hz, "#100F08");
    s += rect(700, hz + 50, 840, 210, `url(#${id}water)`);
    s += rect(700, hz + 46, 840, 5, "#3A3518");
    for (let i = 0; i < 46; i++) s += rect(780 + r() * 680, hz + 60 + r() * 30, 2 + r() * 7, 60 + r() * 110, C.glow, `opacity="${f(0.05 + r() * 0.18)}"`);
    for (let i = 0; i < 10; i++) s += rect(720 + r() * 780, hz + 70 + i * 18, 40 + r() * 160, 1.5, "#F4EEE2", 'opacity="0.08"');
    for (const x of [620, 1580]) s += rect(x - 3, hz - 90, 6, 90, "#1E1B0D") + circ(x, hz - 94, 7, C.warm) + glowAt(id + "win", x, hz - 94, 60);
    s += palm(560, H + 20, 520, 60, "#0B0A05", r) + palm(1560, H + 40, 560, -50, "#0B0A05", r) + palm(420, H + 60, 380, -30, "#0B0A05", r);
    return { d, s };
  }

  /* ---------- Piscine ---------- */
  function pool(id, deck) {
    const r = rng("pool" + (deck ? "d" : ""));
    const hz = deck ? 420 : 470;
    let d = lin(id + "sky", [[0, "#1A180C"], [0.55, "#6B4A20"], [1, "#E19A52"]]);
    d += lin(id + "deck", [[0, "#5A4A2A"], [1, "#2C2413"]]);
    d += lin(id + "w", [[0, C.water1], [0.5, C.water2], [1, C.water3]]);
    d += rad(id + "sun", "#FAC27D", 0.9);
    let s = rect(0, 0, W, hz, `url(#${id}sky)`) + glowAt(id + "sun", 1180, hz, 520) + circ(1180, hz - 20, 54, "#FFE0B0", 'opacity="0.6"');
    s += skyline(hz, r, "#2A2311", null, 10, 40);
    // background building
    s += rect(120, hz - 190, 760, 190, "#231F0E");
    for (let row = 0; row < 4; row++) for (let col = 0; col < 12; col++) {
      const on = r() > 0.5;
      s += rect(140 + col * 61, hz - 176 + row * 44, 44, 28, on ? C.glow : "#302B15", on ? `opacity="${f(0.35 + r() * 0.5)}"` : "");
    }
    s += palm(960, hz + 10, 300, 20, "#17140A", r) + palm(60, hz + 10, 260, 30, "#17140A", r);
    s += rect(0, hz, W, H - hz, `url(#${id}deck)`);
    if (!deck) {
      // bassin secondaire + bassin principal
      s += poly([[1150, 525], [1470, 525], [1500, 578], [1130, 578]], `url(#${id}w)`, `stroke="#E9DCC0" stroke-width="6"`);
      s += poly([[240, 615], [1360, 615], [1530, 935], [70, 935]], `url(#${id}w)`, `stroke="#E9DCC0" stroke-width="9"`);
      for (let y = 628; y < 925; y += 13) {
        const t = (y - 615) / 320, w = 30 + t * 220 * (0.5 + r());
        s += rect(900 - w / 2 + (r() - 0.5) * 40, y, w, 2 + t * 3, "#FFD9A0", `opacity="${f(0.55 - t * 0.35)}"`);
      }
      for (let i = 0; i < 14; i++) { const y = 640 + r() * 280; s += rect(160 + r() * 1100, y, 60 + r() * 220, 1.5, "#EAF2EE", 'opacity="0.12"'); }
      for (let i = 0; i < 6; i++) {
        const x = 280 + i * 150, y = 580;
        s += `<path d="M${x} ${y} l86 0 l12 -26 l-8 -2 l-10 20 l-80 0Z" fill="${C.cream}"/>` + rect(x + 6, y, 3, 14, "#1C170C") + rect(x + 80, y, 3, 14, "#1C170C");
        if (i % 2 === 0) s += rect(x + 104, y - 120, 4, 134, "#1C170C") + `<path d="M${x + 36} ${y - 118} Q${x + 106} ${y - 170} ${x + 176} ${y - 118}Z" fill="${i === 2 ? C.copper : "#E7DCC6"}"/>`;
      }
      s += palm(-40, H + 40, 560, 70, "#0D0C06", r) + palm(1640, H + 40, 600, -80, "#0D0C06", r);
    } else {
      s += poly([[0, 610], [900, 610], [1200, H], [0, H]], `url(#${id}w)`, `stroke="#E9DCC0" stroke-width="10"`);
      for (let i = 0; i < 26; i++) { const y = 630 + r() * 360; s += rect(r() * 900, y, 60 + r() * 260, 2, "#FFE3B8", `opacity="${f(0.1 + r() * 0.3)}"`); }
      const lounger = (x, y, k) => `<path d="M${x} ${y} l${260 * k} 0 l${40 * k} ${-90 * k} l${-26 * k} ${-6 * k} l${-34 * k} ${70 * k} l${-240 * k} 0Z" fill="${C.cream}"/>` +
        rect(x + 4 * k, y + 2, 300 * k, 14 * k, "#C7B592") + rect(x + 16 * k, y, 8 * k, 48 * k, "#1C170C") + rect(x + 250 * k, y, 8 * k, 48 * k, "#1C170C") +
        rect(x + 40 * k, y - 18 * k, 120 * k, 18 * k, C.copper, `rx="${6 * k}"`);
      s += lounger(1000, 760, 1) + lounger(1180, 880, 1.2);
      s += rect(1440, 250, 8, 620, "#1C170C") + `<path d="M1180 270 Q1444 130 1708 270Z" fill="#E7DCC6"/><path d="M1180 270 Q1444 225 1708 270Z" fill="#CDBF9F"/>`;
      s += palm(1520, H + 40, 520, -60, "#0D0C06", r);
    }
    return { d, s };
  }

  /* ---------- Rooftop ---------- */
  function rooftop(id) {
    const r = rng("roof");
    const hz = 640;
    let d = lin(id + "sky", [[0, "#0B0B08"], [0.55, "#221F11"], [0.86, "#6A4420"], [1, "#B06A2C"]]);
    d += rad(id + "b", C.warm, 0.55) + lin(id + "fl", [[0, "#2F2914"], [1, "#12100A"]]);
    let s = rect(0, 0, W, H, `url(#${id}sky)`);
    for (let i = 0; i < 90; i++) s += circ(r() * W, r() * 430, r() * 1.5 + 0.3, C.cream, `opacity="${f(0.2 + r() * 0.6)}"`);
    s += skyline(hz, r, "#15130A", C.glow, 12, 70);
    s += rect(0, hz, W, H - hz, `url(#${id}fl)`);
    s += rect(0, 690, W, 70, "#1B190C") + rect(0, 686, W, 6, "#4A431F");
    for (let x = 0; x < W; x += 80) s += rect(x, 692, 3, 68, "#26230F");
    // string lights
    for (let k = 0; k < 3; k++) {
      const y0 = 90 + k * 70, y1 = 330 + k * 80;
      s += `<path d="M-40 ${y0} Q800 ${y1 * 2 - y0 - 40} 1640 ${y0 + 30}" stroke="#E9D7B0" stroke-opacity="0.35" stroke-width="2" fill="none"/>`;
      for (let t = 0.02; t < 1; t += 0.045) {
        const x = (1 - t) ** 2 * -40 + 2 * (1 - t) * t * 800 + t * t * 1640;
        const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * (y1 * 2 - y0 - 40) + t * t * (y0 + 30);
        s += glowAt(id + "b", x, y + 8, 26) + circ(x, y + 8, 5, "#FFE2B0");
      }
    }
    // bar counter
    s += rect(1060, 700, 560, 180, "#1E1A0C") + rect(1050, 690, 580, 12, C.copper);
    for (let x = 1080; x < 1600; x += 34) s += rect(x, 710, 3, 160, "#2A2512");
    // high tables + stools
    const table = (x, y, k) => rect(x - 4 * k, y, 8 * k, 150 * k, "#0F0D07") + `<ellipse cx="${x}" cy="${y}" rx="${70 * k}" ry="${14 * k}" fill="#2C2713"/>` +
      circ(x, y - 12 * k, 6 * k, C.warm) + glowAt(id + "b", x, y - 12 * k, 50 * k);
    s += table(300, 780, 1.1) + table(640, 820, 1.25) + table(900, 760, 0.9);
    for (const x of [1140, 1250, 1360, 1470]) s += rect(x - 3, 820, 6, 170, "#0C0B06") + `<ellipse cx="${x}" cy="820" rx="36" ry="10" fill="#0C0B06"/>`;
    for (const [x, k] of [[60, 1.2], [1000, 0.8]]) {
      s += rect(x - 50 * k, 900 - 90 * k, 100 * k, 90 * k, "#2A2512");
      for (let i = 0; i < 7; i++) s += circ(x + (r() - 0.5) * 90 * k, 900 - 90 * k - r() * 80 * k, (22 + r() * 22) * k, i % 2 ? "#1E2410" : "#252C12");
    }
    return { d, s };
  }

  /* ---------- Chambres ---------- */
  function room(id, v) {
    const r = rng("room" + v);
    let d = lin(id + "wall", [[0, "#5C4E31"], [1, "#382E1B"]]);
    d += lin(id + "fl", [[0, "#2E2616"], [1, "#161209"]]);
    d += lin(id + "win", [[0, "#2B2612"], [0.6, "#9A5E27"], [1, "#E4A05A"]]);
    d += lin(id + "duv", [[0, "#FFFFFF"], [1, "#DCD2C0"]]);
    d += rad(id + "l", C.warm, 0.6);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 780, W, 220, `url(#${id}fl)`);
    const winX = v === "senior" ? 1220 : 1290;
    s += rect(winX, 150, 1600 - winX - 60, 600, `url(#${id}win)`) + rect(winX + (1600 - winX - 60) / 2 - 3, 150, 6, 600, "#2A2414");
    for (const [x, w] of [[winX - 40, 90], [1500, 100]]) {
      s += rect(x, 110, w, 680, "#7A6440");
      for (let i = 1; i < 5; i++) s += rect(x + (w / 5) * i, 110, 3, 680, "#5E4C2E");
    }
    const beds = v === "famille" ? [[250, 400], [720, 400]] : v === "senior" || v === "junior" ? [[400, 620]] : [[450, 560]];
    const hb0 = beds[0][0] - 60, hb1 = beds[beds.length - 1][0] + beds[beds.length - 1][1] + 60;
    s += rect(hb0, 300, hb1 - hb0, 430, "#241E10");
    for (let x = hb0 + 24; x < hb1; x += 28) s += rect(x, 300, 3, 430, "#342B17");
    const artW = Math.min(360, (hb1 - hb0) * 0.4), artX = (hb0 + hb1) / 2 - artW / 2;
    s += rect(artX, 160, artW, 110, "none", `stroke="${C.copper}" stroke-width="4"`) + `<path d="M${artX + 30} ${240} Q${artX + artW / 2} ${190} ${artX + artW - 30} ${240}" stroke="${C.copper}" stroke-width="5" fill="none"/>`;
    for (const [bx, bw] of beds) {
      s += rect(bx, 700, bw, 110, "#1A150B");
      s += `<path d="M${bx - 10} 640 Q${bx - 10} 620 ${bx + 10} 620 L${bx + bw - 10} 620 Q${bx + bw + 10} 620 ${bx + bw + 10} 640 L${bx + bw + 20} 790 L${bx - 20} 790Z" fill="url(#${id}duv)"/>`;
      s += rect(bx - 16, 700, bw + 32, 46, C.copper, 'opacity="0.9"');
      const np = bw > 500 ? 3 : 2, pw = (bw - 40) / np;
      for (let i = 0; i < np; i++) s += rect(bx + 20 + i * pw, 560, pw - 16, 72, C.linen, 'rx="18"');
    }
    for (const x of [hb0 - 110, hb1 + 20]) {
      if (x + 90 > winX - 40 && x > 800) continue;
      s += rect(x, 660, 90, 120, "#2A2414") + glowAt(id + "l", x + 45, 560, 190);
      s += poly([[x + 18, 530], [x + 72, 530], [x + 82, 590], [x + 8, 590]], "#F2DDB4") + rect(x + 43, 590, 4, 70, "#1A150B");
    }
    if (v === "executive") {
      s += rect(1300, 620, 260, 16, "#2A2414") + rect(1310, 636, 10, 150, "#1A150B") + rect(1540, 636, 10, 150, "#1A150B");
      s += rect(1380, 560, 110, 62, "#1A150B") + rect(1386, 566, 98, 50, "#F6E3BE", 'opacity="0.85"') + glowAt(id + "l", 1435, 590, 120);
      s += rect(1250, 640, 90, 150, "#15110A", 'rx="18"');
    }
    if (v === "superieure" || v === "junior" || v === "senior") {
      const sx = v === "superieure" ? 1260 : 80, sw = v === "superieure" ? 200 : 420;
      s += rect(sx, 800, sw, 130, "#6E5A36", 'rx="20"') + rect(sx, 740, sw, 90, "#7E6840", 'rx="22"');
      for (let i = 0; i < Math.round(sw / 140); i++) s += rect(sx + 20 + i * 130, 760, 100, 60, i % 2 ? C.copper : "#E8DCC4", 'rx="14"');
    }
    if (v === "senior") {
      s += rect(800, 0, 3, 110, "#1A150B");
      for (let i = 0; i < 5; i++) s += circ(740 + i * 30, 120 + (i % 2) * 14, 9, C.warm) + glowAt(id + "l", 740 + i * 30, 120, 60);
      s += `<ellipse cx="800" cy="930" rx="260" ry="36" fill="#8C7453" opacity="0.5"/>`;
    }
    if (v === "standard" || v === "famille") s += `<ellipse cx="760" cy="920" rx="420" ry="46" fill="#8C7453" opacity="0.35"/>`;
    return { d, s };
  }

  /* ---------- Restaurant / bar ---------- */
  function restaurant(id) {
    const r = rng("resto");
    let d = lin(id + "wall", [[0, "#3A301B"], [1, "#221C0F"]]) + lin(id + "win", [[0, "#26210F"], [0.7, "#8A5424"], [1, "#DB9750"]]);
    d += rad(id + "l", C.warm, 0.55) + lin(id + "fl", [[0, "#2B2414"], [1, "#100D07"]]);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 640, W, 360, `url(#${id}fl)`);
    for (let i = 0; i < 5; i++) {
      const x = 90 + i * 300;
      s += `<path d="M${x} 620 V260 a110 110 0 0 1 220 0 V620Z" fill="url(#${id}win)"/>` + rect(x + 108, 150, 4, 470, "#2A2313");
      s += palm(x + 60 + r() * 100, 620, 160 + r() * 80, (r() - 0.5) * 40, "#1B170B", r);
    }
    s += rect(0, 620, W, 24, "#2C2513");
    for (let i = 0; i < 6; i++) {
      const x = 170 + i * 250, y = 170 + (i % 2) * 30;
      s += rect(x - 1, 0, 2, y, "#120F08") + `<path d="M${x - 40} ${y + 30} Q${x} ${y - 20} ${x + 40} ${y + 30}Z" fill="${C.copper}"/>` + glowAt(id + "l", x, y + 40, 150);
    }
    const table = (x, y, k) => {
      let t = "";
      for (const dx of [-1, 1]) t += rect(x + dx * 120 * k - 22 * k, y - 110 * k, 44 * k, 130 * k, "#130F08", `rx="${10 * k}"`);
      t += `<ellipse cx="${x}" cy="${y}" rx="${110 * k}" ry="${24 * k}" fill="#EFE7D6"/>` + rect(x - 110 * k, y, 220 * k, 70 * k, "#DDD2BC");
      t += circ(x, y - 8 * k, 6 * k, C.warm) + glowAt(id + "l", x, y - 8 * k, 60 * k);
      for (const dx of [-50, 40]) t += rect(x + dx * k, y - 30 * k, 8 * k, 26 * k, "#F6EFE2", 'opacity="0.8"');
      return t;
    };
    s += table(360, 700, 0.7) + table(800, 700, 0.7) + table(1240, 700, 0.7);
    s += table(200, 880, 1.2) + table(820, 900, 1.3) + table(1440, 880, 1.2);
    return { d, s };
  }

  function bar(id, outdoor) {
    const r = rng("bar" + (outdoor ? "o" : ""));
    let d = lin(id + "wall", outdoor ? [[0, "#0B0B08"], [0.7, "#2A2412"], [1, "#8A5424"]] : [[0, "#2E2615"], [1, "#1A150B"]]);
    d += rad(id + "l", C.warm, 0.6) + lin(id + "sh", [[0, C.glow, 0.05], [1, C.glow, 0.5]]);
    let s = rect(0, 0, W, H, `url(#${id}wall)`);
    if (outdoor) {
      for (let i = 0; i < 70; i++) s += circ(r() * W, r() * 300, r() * 1.4 + 0.3, C.cream, `opacity="${f(0.2 + r() * 0.5)}"`);
      s += skyline(560, r, "#15130A", C.glow, 10, 50);
      s += rect(200, 180, 16, 420, "#1B170B") + rect(1384, 180, 16, 420, "#1B170B") + rect(180, 170, 1240, 24, "#1B170B");
    }
    for (let k = 0; k < 3; k++) {
      const y = 250 + k * 110;
      s += rect(260, y - 80, 1080, 80, `url(#${id}sh)`) + rect(260, y, 1080, 8, "#3A3218");
      let x = 280;
      while (x < 1320) {
        const h = 36 + r() * 40, w = 14 + r() * 12;
        s += rect(x, y - h, w, h, "#120F08", 'rx="3"') + rect(x + w / 2 - 3, y - h - 16, 6, 18, "#120F08");
        x += w + 8 + r() * 14;
      }
    }
    for (let i = 0; i < 5; i++) {
      const x = 360 + i * 220;
      s += rect(x - 1, 0, 2, 120, "#0E0C06") + circ(x, 130, 16, C.warm) + glowAt(id + "l", x, 130, 110);
    }
    s += rect(0, 640, W, 360, "#1E190D") + rect(0, 630, W, 18, C.copper);
    for (let x = 20; x < W; x += 36) s += rect(x, 650, 4, 350, "#2A2412");
    for (const x of [300, 560, 820, 1080, 1340]) s += rect(x - 4, 740, 8, 260, "#0B0905") + `<ellipse cx="${x}" cy="740" rx="56" ry="16" fill="#0B0905"/>`;
    return { d, s };
  }

  /* ---------- Séminaires ---------- */
  function seminar(id) {
    let d = lin(id + "wall", [[0, "#D9CCB0"], [1, "#B9A782"]]) + lin(id + "fl", [[0, "#6E5A3A"], [1, "#3C301D"]]);
    d += lin(id + "scr", [[0, "#FFF4DE"], [1, "#EBD6AE"]]) + rad(id + "l", "#FFFFFF", 0.7);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 0, W, 70, "#EAE0CC");
    for (let x = 100; x < W; x += 200) s += `<ellipse cx="${x}" cy="70" rx="40" ry="6" fill="#FFF8EA"/>` + glowAt(id + "l", x, 76, 70);
    s += rect(0, 500, W, 500, `url(#${id}fl)`);
    s += rect(540, 150, 520, 300, "#2A2313") + rect(552, 162, 496, 276, `url(#${id}scr)`);
    s += rect(600, 210, 180, 14, C.copper) + rect(600, 250, 360, 8, "#B9A782") + rect(600, 274, 300, 8, "#B9A782") + rect(600, 298, 330, 8, "#B9A782");
    s += `<path d="M820 400 Q900 340 980 400" stroke="${C.copper}" stroke-width="5" fill="none"/>`;
    s += poly([[380, 380], [460, 380], [450, 500], [390, 500]], "#3A2F1B") + rect(372, 372, 96, 12, "#2A2313");
    for (let k = 0; k < 6; k++) {
      const sc = 0.42 + k * 0.14, y = 540 + k * 78 * (0.8 + k * 0.08), cw = 64 * sc, gapc = 18 * sc;
      const span = 1100 + k * 160, x0 = 800 - span / 2;
      s += rect(x0 - 10, y + 28 * sc, span + 20, 30 * sc, "#EFE7D6") + rect(x0 - 10, y + 58 * sc, span + 20, 30 * sc, "#D2C5A9");
      for (let x = x0; x < x0 + span - cw; x += cw + gapc) {
        if (Math.abs(x + cw / 2 - 800) < 50 * sc) continue;
        s += rect(x, y - 60 * sc, cw, 80 * sc, "#241E10", `rx="${10 * sc}"`);
      }
    }
    return { d, s };
  }

  function boardroom(id) {
    let d = lin(id + "wall", [[0, "#CFC0A0"], [1, "#A8966F"]]) + lin(id + "tb", [[0, "#4A3B20"], [1, "#2A2112"]]);
    d += lin(id + "win", [[0, "#F6E6C6"], [1, "#E1B77D"]]) + rad(id + "l", "#FFF6E4", 0.7);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 560, W, 440, "#57462A");
    for (let i = 0; i < 4; i++) s += rect(1180 + i * 105, 140, 90, 400, `url(#${id}win)`);
    s += rect(560, 150, 480, 260, "#1F190D") + rect(572, 162, 456, 236, "#2F2915") + rect(610, 200, 150, 10, C.copper) + rect(610, 236, 300, 6, "#6B5E3E") + rect(610, 256, 250, 6, "#6B5E3E");
    s += glowAt(id + "l", 800, 80, 300);
    s += poly([[560, 590], [1040, 590], [1360, 930], [240, 930]], `url(#${id}tb)`) + poly([[560, 590], [1040, 590], [1050, 606], [550, 606]], "#6A5532");
    for (let i = 0; i < 5; i++) {
      const t = i / 4, sc = 0.55 + t * 0.6;
      const yl = 600 + t * 300, xl = 560 - t * 320 - 60 * sc, xr = 1040 + t * 320 + 10 * sc;
      s += rect(xl, yl - 90 * sc, 56 * sc, 120 * sc, "#1B160C", `rx="${14 * sc}"`) + rect(xr, yl - 90 * sc, 56 * sc, 120 * sc, "#1B160C", `rx="${14 * sc}"`);
      s += rect(800 - 120 * (1 + t) + i * 0, yl - 6, 50 * sc, 8 * sc, "#F4EEE2", 'opacity="0.7"') + rect(800 + 80 * (1 + t), yl - 6, 50 * sc, 8 * sc, "#F4EEE2", 'opacity="0.7"');
    }
    return { d, s };
  }

  /* ---------- Espaces communs ---------- */
  function billiard(id) {
    let d = lin(id + "wall", [[0, "#2E2716"], [1, "#16120A"]]) + rad(id + "l", C.warm, 0.6) + lin(id + "felt", [[0, "#56642A"], [1, "#39431B"]]);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 700, W, 300, "#120F08");
    for (let x = 0; x < W; x += 60) s += rect(x, 0, 2, 700, "#241E10");
    s += rect(1300, 220, 200, 320, "#241E10") + Array.from({ length: 6 }, (_, i) => rect(1320 + i * 30, 240, 6, 290, "#B78A55")).join("");
    s += rect(480, 60, 640, 40, "#0C0A05", 'rx="8"') + rect(798, 0, 4, 60, "#0C0A05");
    for (const x of [580, 800, 1020]) s += poly([[x - 60, 100], [x + 60, 100], [x + 40, 150], [x - 40, 150]], C.copper) + glowAt(id + "l", x, 200, 260);
    s += poly([[360, 560], [1240, 560], [1400, 820], [200, 820]], "#2A1E0F") + poly([[400, 575], [1200, 575], [1340, 800], [260, 800]], `url(#${id}felt)`);
    s += rect(200, 820, 1200, 40, "#1C140A") + rect(260, 860, 50, 140, "#140E07") + rect(1290, 860, 50, 140, "#140E07");
    const balls = [[700, 700, C.cream], [760, 690, C.copper], [800, 720, "#1A160C"], [880, 660, "#B8532A"], [960, 740, "#E8C565"], [620, 640, "#6B3A1E"]];
    for (const [x, y, c] of balls) s += circ(x, y, 16, c) + circ(x - 5, y - 5, 4, "#FFFFFF", 'opacity="0.5"');
    s += `<path d="M420 780 L900 700" stroke="#C9A06A" stroke-width="8" stroke-linecap="round"/>`;
    return { d, s };
  }

  function business(id) {
    let d = lin(id + "wall", [[0, "#4A3F26"], [1, "#2A2314"]]) + rad(id + "l", "#FFF1D4", 0.5);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 720, W, 280, "#1A150B");
    for (let k = 0; k < 3; k++) s += rect(100, 150 + k * 120, 380, 8, "#2A2313") + Array.from({ length: 9 }, (_, i) => rect(110 + i * 40, 150 + k * 120 - 60 - (i % 3) * 8, 26, 60 + (i % 3) * 8, i % 4 ? "#3B321C" : C.copper)).join("");
    s += rect(560, 600, 980, 22, "#2F2716") + rect(580, 622, 12, 200, "#120F08") + rect(1510, 622, 12, 200, "#120F08");
    for (const x of [640, 940, 1240]) {
      s += rect(x, 400, 240, 150, "#120F08", 'rx="6"') + rect(x + 10, 410, 220, 130, "#F4E4C4", 'opacity="0.9"') + rect(x + 110, 550, 20, 50, "#120F08");
      s += rect(x + 30, 440, 90, 10, C.copper) + rect(x + 30, 470, 160, 6, "#C9B690") + rect(x + 30, 490, 130, 6, "#C9B690");
      s += glowAt(id + "l", x + 120, 470, 220) + rect(x + 60, 700, 120, 200, "#0E0B06", 'rx="24"');
    }
    s += rect(80, 780, 110, 140, "#2A2412");
    for (let i = 0; i < 8; i++) s += circ(135 + Math.cos(i) * 50, 740 - (i % 4) * 40, 40, i % 2 ? "#26300F" : "#1E260C");
    return { d, s };
  }

  function fitness(id) {
    let d = lin(id + "wall", [[0, "#D3C3A0"], [1, "#A89370"]]) + lin(id + "win", [[0, "#F8E7C4"], [1, "#E0A864"]]);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 740, W, 260, "#3A2F1C");
    for (let i = 0; i < 5; i++) s += rect(80 + i * 190, 120, 170, 560, `url(#${id}win)`);
    s += palm(300, 680, 260, 30, "#B98B55", rng("fit")) + palm(760, 680, 220, -20, "#B98B55", rng("fit2"));
    const tread = (x, k) => poly([[x, 900], [x + 320 * k, 900], [x + 300 * k, 860], [x + 20 * k, 860]], "#1A150B") +
      `<path d="M${x + 280 * k} 860 L${x + 330 * k} ${900 - 300 * k}" stroke="#1A150B" stroke-width="${14 * k}"/>` + rect(x + 300 * k, 900 - 330 * k, 70 * k, 40 * k, "#1A150B", `rx="${6 * k}"`);
    s += tread(120, 1) + tread(540, 1);
    s += rect(1060, 520, 460, 16, "#1A150B") + rect(1060, 640, 460, 16, "#1A150B") + rect(1070, 520, 12, 380, "#1A150B") + rect(1500, 520, 12, 380, "#1A150B");
    for (let i = 0; i < 6; i++) for (const y of [500, 620]) s += rect(1100 + i * 66, y - 4, 44, 8, "#2A2412") + circ(1100 + i * 66, y, 18, C.copper) + circ(1144 + i * 66, y, 18, C.copper);
    s += rect(960, 800, 300, 40, "#241E10", 'rx="14"') + rect(990, 840, 12, 60, "#120F08") + rect(1220, 840, 12, 60, "#120F08");
    return { d, s };
  }

  function lobby(id) {
    let d = lin(id + "wall", [[0, "#3D331D"], [1, "#221C0F"]]) + rad(id + "l", C.warm, 0.55) + lin(id + "desk", [[0, "#E3A15C"], [1, "#9C5A22"]]);
    let s = rect(0, 0, W, H, `url(#${id}wall)`) + rect(0, 760, W, 240, "#151108");
    for (let x = 60; x < W; x += 90) s += rect(x, 0, 4, 760, "#2E2715");
    s += rect(560, 160, 480, 300, "#2A2313") + `<path d="M620 380 Q800 300 980 380" stroke="${C.copper}" stroke-width="8" fill="none"/>`;
    for (let i = 0; i < 7; i++) { const x = 700 + i * 34, h = 120 - Math.abs(i - 3) * 16; s += rect(x, 350 - h, 20, h, C.copper); }
    s += rect(420, 560, 760, 220, `url(#${id}desk)`) + rect(410, 548, 780, 16, "#F3E3C4");
    for (let x = 440; x < 1170; x += 30) s += rect(x, 570, 3, 200, "#8A4F1C", 'opacity="0.5"');
    for (const x of [300, 1300]) s += rect(x - 1, 0, 2, 200, "#0E0C06") + circ(x, 220, 30, "#F3DDB2") + glowAt(id + "l", x, 230, 220);
    s += rect(1320, 720, 260, 110, "#6E5A36", 'rx="20"') + rect(40, 720, 220, 110, "#6E5A36", 'rx="20"');
    return { d, s };
  }

  function map(id) {
    const r = rng("map");
    let d = rad(id + "p", C.copper, 0.45);
    let s = rect(0, 0, W, H, "#EDE6D5");
    for (let i = 0; i < 38; i++) s += rect(r() * W, r() * H, 60 + r() * 180, 40 + r() * 120, i % 5 ? "#E3DAC4" : "#D7E0C1", 'rx="6"');
    const roads = [[[-50, 820], [600, 560], [1650, 300]], [[300, -50], [760, 480], [980, 1050]], [[-50, 300], [900, 420], [1650, 700]], [[1200, -50], [1100, 500], [1300, 1050]]];
    roads.forEach((p, i) => s += `<path d="M${p[0]} Q${p[1]} ${p[2]}" stroke="${i === 0 ? "#E4C48E" : "#FFFFFF"}" stroke-width="${i === 0 ? 26 : 16}" fill="none" stroke-linecap="round"/>`);
    for (let i = 0; i < 12; i++) { const y = r() * H; s += `<path d="M${-20} ${f(y)} L${W + 20} ${f(y + (r() - 0.5) * 300)}" stroke="#FFFFFF" stroke-width="6" opacity="0.7"/>`; }
    s += `<path d="M-50 130 Q800 260 1650 80" stroke="#8C7A57" stroke-width="4" stroke-dasharray="18 10" fill="none"/>`;
    s += glowAt(id + "p", 800, 480, 180) + circ(800, 480, 70, C.copper, 'opacity="0.2"');
    s += `<path d="M800 520 C770 480 750 455 750 430 a50 50 0 0 1 100 0 c0 25 -20 50 -50 90Z" fill="${C.copper}"/>` + circ(800, 430, 18, "#FFFFFF");
    return { d, s };
  }

  const registry = {
    facade: (id) => facade(id, false), facadeNight: (id) => facade(id, true),
    pool: (id) => pool(id, false), poolDeck: (id) => pool(id, true),
    rooftop, rooftopBar: (id) => bar(id, true), bar: (id) => bar(id, false),
    restaurant, seminar, boardroom, billiard, business, fitness, lobby, map
  };

  window.Scenes = {
    render(scene, alt) {
      const id = "s" + (++uidN) + "_";
      const [name, variant] = String(scene).split(":");
      const fn = name === "room" ? (i) => room(i, variant || "standard") : registry[name] || registry.facade;
      const { d, s } = fn(id);
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${(alt || "").replace(/"/g, "&quot;")}"><defs>${d}</defs>${s}</svg>`;
    }
  };
})();
