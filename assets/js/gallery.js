(function () {
  'use strict';
  var ROOT = document.body.getAttribute('data-root') || '';
  var GALERIA = ROOT ? 'galeria.html' : 'paginas/galeria.html';
  var items = (window.DISSONANCE_MEDIA || []).map(function (m) {
    var c = {};
    for (var k in m) c[k] = m[k];
    if (c.src && !/^([a-z]+:|\/)/i.test(c.src)) c.src = ROOT + c.src;
    if (c.poster && !/^([a-z]+:|\/)/i.test(c.poster)) c.poster = ROOT + c.poster;
    return c;
  });
  var gallery = document.querySelector('.gallery');
  var peek = document.getElementById('peek');

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  var DIMS = { '16x9': [1600, 900], '4x5': [1280, 1600], '1x1': [1200, 1200] };
  function caption(m) {
    return [m.title, m.caption, m.credit ? 'Crédito: ' + m.credit : ''].filter(Boolean).join(' — ');
  }

  /* ---------- Vistazo en la home ---------- */
  if (peek && items.length) {
    var shown = items.filter(function (m) { return m.type === 'image' || m.poster; }).slice(0, 3);
    if (shown.length) {
      peek.textContent = '';
      peek.className = 'peek';
      shown.forEach(function (m) {
        var a = el('a', 'media r-16x9');
        a.href = GALERIA;
        a.setAttribute('aria-label', 'Ver en la galería: ' + (m.title || 'material'));
        var img = el('img');
        img.src = m.type === 'image' ? m.src : m.poster;
        img.alt = m.type === 'image' ? (m.alt || m.title || '') : '';
        img.loading = 'lazy'; img.decoding = 'async';
        var d = DIMS['16x9']; img.width = d[0]; img.height = d[1];
        a.appendChild(img); peek.appendChild(a);
      });
    }
  }

  /* ---------- Making of ---------- */
  var mo = window.DISSONANCE_MAKING_OF;
  var moBox = document.getElementById('making-of-media');
  if (moBox && mo && mo.src) {
    var abs = function (u) { return u && !/^([a-z]+:|\/)/i.test(u) ? ROOT + u : u; };
    var fig = el('figure', 'media r-16x9');
    var node;
    if (mo.type === 'embed') {
      node = el('iframe'); node.src = mo.src; node.title = mo.title || 'Making of';
      node.allow = 'fullscreen; picture-in-picture'; node.allowFullscreen = true; node.loading = 'lazy';
    } else {
      node = el('video'); node.src = abs(mo.src); node.controls = true; node.preload = 'metadata';
      node.setAttribute('playsinline', '');
      if (mo.poster) node.poster = abs(mo.poster);
      node.setAttribute('aria-label', mo.title || 'Making of');
    }
    fig.appendChild(node);
    moBox.textContent = '';
    moBox.appendChild(fig);
    var capEl = document.getElementById('making-of-cap');
    if (capEl) capEl.textContent = [mo.title, mo.credit ? 'Crédito: ' + mo.credit : ''].filter(Boolean).join(' — ');
  }

  if (!gallery) return;

  /* ---------- Render de la cuadrícula desde media-data.js ---------- */
  items.forEach(function (m) {
    var ratio = DIMS[m.ratio] ? m.ratio : '16x9';
    var fig = el('figure', 'media r-' + ratio);
    fig.setAttribute('data-type', m.type === 'image' ? 'foto' : 'video');
    fig.setAttribute('data-full', m.src);
    fig.setAttribute('data-kind', m.type);
    if (m.poster) fig.setAttribute('data-poster', m.poster);
    if (m.alt) fig.setAttribute('data-alt', m.alt);
    fig.setAttribute('data-caption', caption(m));
    var b = el('button', 'media-btn');
    b.type = 'button';
    b.setAttribute('aria-label', 'Ampliar: ' + (m.title || 'material'));
    if (m.type === 'image' || m.poster) {
      var img = el('img');
      img.src = m.type === 'image' ? m.src : m.poster;
      img.alt = m.type === 'image' ? (m.alt || m.title || '') : '';
      img.loading = 'lazy'; img.decoding = 'async';
      img.width = m.width || DIMS[ratio][0]; img.height = m.height || DIMS[ratio][1];
      b.appendChild(img);
    } else {
      b.appendChild(el('div', 'nothumb', 'Video'));
    }
    if (m.type !== 'image') b.appendChild(el('span', 'play', '▶ Video'));
    fig.appendChild(b);
    var fc = el('figcaption', '', caption(m));
    if (fc.textContent) fig.appendChild(fc);
    gallery.appendChild(fig);
  });

  var figs = function () { return [].slice.call(gallery.querySelectorAll(':scope > figure')); };
  var empty = document.getElementById('gallery-empty');
  var filters = document.getElementById('filters');
  var total = figs().length;
  if (total) {
    if (empty) empty.hidden = true;
    if (filters) filters.hidden = false;
    gallery.hidden = false;
  } else {
    gallery.hidden = true;
    return;
  }

  /* ---------- Filtros ---------- */
  var current = 'all';
  if (filters) {
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-filter]');
      if (!b) return;
      current = b.getAttribute('data-filter');
      [].forEach.call(filters.querySelectorAll('button'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      figs().forEach(function (f) { f.hidden = current !== 'all' && f.getAttribute('data-type') !== current; });
      var note = document.getElementById('filter-empty');
      if (note) note.hidden = figs().some(function (f) { return !f.hidden; });
    });
  }

  /* ---------- Lightbox ---------- */
  var dlg = document.getElementById('viewer');
  if (!dlg) return;
  var stage = document.getElementById('v-stage');
  var cap = document.getElementById('v-cap');
  var idx = 0, opener = null;
  var visible = function () { return figs().filter(function (f) { return !f.hidden; }); };

  function show(i) {
    var list = visible();
    if (!list.length) return;
    idx = (i + list.length) % list.length;
    var f = list[idx];
    stage.textContent = '';
    var kind = f.getAttribute('data-kind') || (f.getAttribute('data-type') === 'video' ? 'video' : 'image');
    var src = f.getAttribute('data-full') || (f.querySelector('img') || {}).src;
    var node;
    if (kind === 'video') {
      node = el('video'); node.src = src; node.controls = true; node.preload = 'metadata';
      var p = f.getAttribute('data-poster'); if (p) node.poster = p;
    } else if (kind === 'embed') {
      node = el('iframe'); node.src = src; node.title = 'Video';
      node.allow = 'fullscreen; picture-in-picture'; node.allowFullscreen = true;
    } else {
      node = el('img'); node.src = src;
      node.alt = f.getAttribute('data-alt') || (f.querySelector('img') ? f.querySelector('img').alt : '');
    }
    stage.appendChild(node);
    var c = f.getAttribute('data-caption') || (f.querySelector('figcaption') ? f.querySelector('figcaption').textContent : '');
    cap.textContent = c;
    opener = f.querySelector('.media-btn');
  }
  gallery.addEventListener('click', function (e) {
    var f = e.target.closest('figure'); if (!f || !e.target.closest('.media-btn')) return;
    var i = visible().indexOf(f);
    show(i < 0 ? 0 : i);
    if (!dlg.open) dlg.showModal();
  });
  document.getElementById('v-prev').addEventListener('click', function () { show(idx - 1); });
  document.getElementById('v-next').addEventListener('click', function () { show(idx + 1); });
  document.getElementById('v-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
  });
  dlg.addEventListener('close', function () {
    stage.textContent = '';
    if (opener) opener.focus();
  });
})();
