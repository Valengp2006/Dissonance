(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: estado con scroll ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú móvil (panel completo, foco atrapado) ---------- */
  var btn = document.querySelector('.menu-btn');
  var panel = document.getElementById('menu-panel');
  if (btn && panel) {
    var focusables = function () { return panel.querySelectorAll('a[href], button:not([disabled])'); };
    var closeTimer;
    var openMenu = function () {
      clearTimeout(closeTimer);
      panel.hidden = false;
      void panel.offsetWidth;
      panel.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      root.classList.add('menu-open');
      var f = focusables(); if (f.length) f[0].focus();
    };
    var closeMenu = function (returnFocus) {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      root.classList.remove('menu-open');
      closeTimer = setTimeout(function () { panel.hidden = true; }, reduce ? 0 : 300);
      if (returnFocus) btn.focus();
    };
    btn.addEventListener('click', openMenu);
    panel.querySelector('.menu-close').addEventListener('click', function () { closeMenu(true); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (panel.hidden) return;
      if (e.key === 'Escape') { closeMenu(true); return; }
      if (e.key !== 'Tab') return;
      var f = focusables(); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches && !panel.hidden) closeMenu(false); });
  }

  /* ---------- Reveal al hacer scroll (una vez) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Resaltado de índice por scroll ---------- */
  function spy(links) {
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) map[t.id] = a;
    });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
        var a = map[en.target.id];
        if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'location'); }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { so.observe(document.getElementById(id)); });
  }
  spy([].slice.call(document.querySelectorAll('.side-nav a, .toc a')));

  /* ---------- Copiar ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy]');
    if (!b) return;
    var src = document.getElementById(b.getAttribute('data-copy'));
    if (!src) return;
    var text = src.textContent;
    var done = function (ok) {
      var old = b.textContent;
      b.textContent = ok ? 'Copiado' : 'No se pudo copiar';
      setTimeout(function () { b.textContent = old; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else { done(false); }
  });

  /* ---------- Campo de estrellas ---------- */
  var canvas = document.getElementById('stars');
  var ctx = canvas && canvas.getContext && canvas.getContext('2d');
  if (ctx) {
    var stars = [], W = 0, H = 0, dpr = 1, last = 0;
    var build = function () {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = W < 768 ? 70 : 140;
      stars = [];
      for (var i = 0; i < n; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: 0.4 + Math.random() * 1.0,
          a: 0.25 + Math.random() * 0.65,
          p: 4000 + Math.random() * 5000,
          o: Math.random() * Math.PI * 2
        });
      }
    };
    var draw = function (t) {
      ctx.clearRect(0, 0, W, H);
      var shift = reduce ? 0 : window.scrollY * 0.04;
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var tw = reduce ? 1 : 0.65 + 0.35 * Math.sin(t / s.p * Math.PI * 2 + s.o);
        var y = ((s.y - shift) % H + H) % H;
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = '#dfe8ff';
        ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };
    var loop = function (t) {
      if (!document.hidden && t - last > 33) { last = t; draw(t); }
      requestAnimationFrame(loop);
    };
    build(); draw(0);
    if (!reduce) requestAnimationFrame(loop);
    var resize = function () { build(); draw(performance.now()); };
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(root);
    else window.addEventListener('resize', resize);
  }
})();
