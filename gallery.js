(function () {
  var items = window.DISSONANCE_MEDIA || [];
  var grid = document.getElementById('gallery-grid');
  var note = document.getElementById('gallery-note');
  var viewer = document.getElementById('viewer');
  var stage = document.getElementById('viewer-stage');
  var caption = document.getElementById('viewer-caption');
  var filters = document.querySelectorAll('.filters button');
  var filter = 'all';
  var opener = null;

  var placeholders = [
    { type: 'image', title: 'Foto de la experiencia' },
    { type: 'video', title: 'Video de la experiencia' },
    { type: 'image', title: 'Foto del proceso' },
    { type: 'video', title: 'Video del detrás de cámaras' },
    { type: 'image', title: 'Estación PC y VR' },
    { type: 'image', title: 'Storyboard o moodboard' }
  ];
  var usingPlaceholders = items.length === 0;
  var list = usingPlaceholders ? placeholders : items;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function render() {
    grid.textContent = '';
    var shown = list.filter(function (m) { return filter === 'all' || m.type === filter || (filter === 'video' && m.type === 'embed'); });
    if (usingPlaceholders) {
      note.hidden = false;
      note.textContent = 'Aún no se han cargado fotos ni videos. Los recuadros son espacios reservados, no capturas reales del proyecto.';
    }
    shown.forEach(function (m) {
      var li = el('li', 'media-item');
      if (usingPlaceholders) {
        li.className += ' ph';
        li.appendChild(el('span', '', 'Placeholder · ' + m.title));
        li.appendChild(el('span', 'media-kind', m.type === 'image' ? 'Foto' : 'Video'));
      } else {
        var b = el('button', 'media-open');
        b.type = 'button';
        b.setAttribute('aria-label', 'Abrir: ' + (m.title || 'material'));
        var thumb;
        if (m.type === 'image') {
          thumb = el('img'); thumb.src = m.src; thumb.alt = m.alt || m.title || ''; thumb.loading = 'lazy';
        } else if (m.poster) {
          thumb = el('img'); thumb.src = m.poster; thumb.alt = ''; thumb.loading = 'lazy';
        } else {
          thumb = el('div', 'media-nothumb', 'Video');
        }
        b.appendChild(thumb);
        if (m.type !== 'image') b.appendChild(el('span', 'play', '▶'));
        b.appendChild(el('span', 'media-title', m.title || ''));
        if (m.category) b.appendChild(el('span', 'media-kind', m.category));
        b.addEventListener('click', function () { open(m, b); });
        li.appendChild(b);
      }
      grid.appendChild(li);
    });
    if (!shown.length) grid.appendChild(el('li', 'aside', 'No hay material de este tipo todavía.'));
  }

  function open(m, trigger) {
    opener = trigger;
    stage.textContent = '';
    var node;
    if (m.type === 'image') {
      node = el('img'); node.src = m.src; node.alt = m.alt || m.title || '';
    } else if (m.type === 'video') {
      node = el('video'); node.src = m.src; node.controls = true; node.preload = 'metadata';
      if (m.poster) node.poster = m.poster;
    } else {
      node = el('iframe'); node.src = m.src; node.title = m.title || 'Video';
      node.allow = 'fullscreen; picture-in-picture'; node.allowFullscreen = true;
    }
    stage.appendChild(node);
    var parts = [m.title, m.caption, m.credit ? 'Crédito: ' + m.credit : ''].filter(Boolean);
    caption.textContent = parts.join(' — ');
    viewer.showModal();
  }

  function close() { viewer.close(); }
  viewer.addEventListener('close', function () {
    stage.textContent = '';
    if (opener) opener.focus();
  });
  viewer.querySelector('.viewer-close').addEventListener('click', close);
  viewer.addEventListener('click', function (e) { if (e.target === viewer) close(); });

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filter = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      render();
    });
  });

  render();
})();
