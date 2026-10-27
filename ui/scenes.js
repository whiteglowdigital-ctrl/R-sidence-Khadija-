/* =====================================================================
   INTERFACE — Illustrations SVG de remplacement
   Utilisées uniquement quand une image n'a pas de photo (`src` vide)
   dans content/images.js. Aujourd'hui : le plan stylisé du quartier.
   ===================================================================== */
(function () {
  const W = 1600, H = 1000;
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

  /* Plan stylisé : îlots, routes, littoral et repère de l'hôtel (purement décoratif). */
  function map(id) {
    const r = rng("map");
    const d = `<radialGradient id="${id}p"><stop offset="0" stop-color="#D8843A" stop-opacity=".45"/><stop offset="1" stop-color="#D8843A" stop-opacity="0"/></radialGradient>`;
    let s = rect(0, 0, W, H, "#EDE6D5");
    s += `<path d="M0 760 Q400 700 800 780 T1600 740 V1000 H0Z" fill="#CFE0DD"/>`;
    for (let i = 0; i < 34; i++) s += rect(r() * W, r() * 700, 60 + r() * 180, 40 + r() * 110, i % 5 ? "#E3DAC4" : "#D7E0C1", 'rx="6"');
    const roads = [[[-50, 640], [600, 520], [1650, 600]], [[300, -50], [760, 420], [980, 760]], [[-50, 260], [900, 380], [1650, 300]], [[1200, -50], [1100, 400], [1300, 760]]];
    roads.forEach((p, i) => (s += `<path d="M${p[0]} Q${p[1]} ${p[2]}" stroke="${i === 0 ? "#E4C48E" : "#FFFFFF"}" stroke-width="${i === 0 ? 26 : 16}" fill="none" stroke-linecap="round"/>`));
    for (let i = 0; i < 10; i++) { const y = r() * 700; s += `<path d="M-20 ${f(y)} L${W + 20} ${f(y + (r() - 0.5) * 240)}" stroke="#FFFFFF" stroke-width="6" opacity="0.7"/>`; }
    s += circ(800, 480, 180, `url(#${id}p)`) + circ(800, 480, 70, "#D8843A", 'opacity="0.2"');
    s += `<path d="M800 520 C770 480 750 455 750 430 a50 50 0 0 1 100 0 c0 25 -20 50 -50 90Z" fill="#D8843A"/>` + circ(800, 430, 18, "#FFFFFF");
    return { d, s };
  }

  const registry = { map };

  window.Scenes = {
    render(scene, alt) {
      const id = "s" + (++uidN) + "_";
      const fn = registry[String(scene).split(":")[0]] || map;
      const { d, s } = fn(id);
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${(alt || "").replace(/"/g, "&quot;")}"><defs>${d}</defs>${s}</svg>`;
    }
  };
})();
