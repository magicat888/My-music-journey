(function() {
  "use strict";

  var PRIMARY_COLORS = [
    { name: "red", hex: "#ef5350" },
    { name: "pink", hex: "#e91e63" },
    { name: "purple", hex: "#ab47bc" },
    { name: "deep-purple", hex: "#7e57c2" },
    { name: "indigo", hex: "#3f51b5" },
    { name: "blue", hex: "#2094f3" },
    { name: "light-blue", hex: "#02a2f2" },
    { name: "cyan", hex: "#00bcd4" },
    { name: "teal", hex: "#009688" },
    { name: "green", hex: "#4caf50" },
    { name: "light-green", hex: "#7cb342" },
    { name: "lime", hex: "#c0ca33" },
    { name: "yellow", hex: "#ffeb3b" },
    { name: "amber", hex: "#ffc107" },
    { name: "orange", hex: "#ff9800" },
    { name: "deep-orange", hex: "#ff6e40" },
    { name: "brown", hex: "#795548" },
    { name: "grey", hex: "#757575" },
    { name: "blue-grey", hex: "#546e7a" },
    { name: "black", hex: "#000000" },
    { name: "white", hex: "#ffffff" }
  ];

  var ACCENT_COLORS = [
    { name: "red", hex: "#ff1744" },
    { name: "pink", hex: "#f50057" },
    { name: "purple", hex: "#d500f9" },
    { name: "deep-purple", hex: "#651fff" },
    { name: "indigo", hex: "#3d5afe" },
    { name: "blue", hex: "#2979ff" },
    { name: "light-blue", hex: "#00b0ff" },
    { name: "cyan", hex: "#00e5ff" },
    { name: "teal", hex: "#1de9b6" },
    { name: "green", hex: "#00e676" },
    { name: "light-green", hex: "#76ff03" },
    { name: "lime", hex: "#c6ff00" },
    { name: "yellow", hex: "#ffea00" },
    { name: "amber", hex: "#ffc400" },
    { name: "orange", hex: "#ff9100" },
    { name: "deep-orange", hex: "#ff6e40" }
  ];

  // Use the same scoped storage key the bundle uses
  // __md_scope is set by the page's inline script
  function getScope() {
    return (typeof __md_scope !== "undefined" && __md_scope)
      ? __md_scope.pathname
      : location.pathname;
  }

  function applyTheme(scheme, primary, accent) {
    var body = document.body;
    if (scheme) body.setAttribute("data-md-color-scheme", scheme);
    if (primary) body.setAttribute("data-md-color-primary", primary);
    if (accent) body.setAttribute("data-md-color-accent", accent);

    // Sync with the bundle's __palette storage so it doesn't overwrite on reload
    var scope = getScope();
    var paletteKey = scope + ".__palette";
    var existing = {};
    try { existing = JSON.parse(localStorage.getItem(paletteKey)) || {}; } catch(e) {}
    if (!existing.color) existing.color = {};
    if (scheme) existing.color.scheme = scheme;
    if (primary) existing.color.primary = primary;
    if (accent) existing.color.accent = accent;
    try { localStorage.setItem(paletteKey, JSON.stringify(existing)); } catch(e) {}
  }

  function getCurrentTheme() {
    var body = document.body;
    return {
      scheme: body.getAttribute("data-md-color-scheme") || "default",
      primary: body.getAttribute("data-md-color-primary") || "indigo",
      accent: body.getAttribute("data-md-color-accent") || "indigo"
    };
  }

  function buildPanel() {
    // Overlay
    var overlay = document.createElement("div");
    overlay.className = "theme-chooser-overlay";
    document.body.appendChild(overlay);

    // Panel
    var panel = document.createElement("div");
    panel.className = "theme-chooser-panel";

    var html = '<button class="close-btn" aria-label="Close">&times;</button>';
    // Scheme section
    html += '<div class="section"><h3>Color Scheme</h3>' +
      '<div class="scheme-buttons">' +
      '<button data-scheme="default">Light</button>' +
      '<button data-scheme="slate">Dark</button>' +
      '</div></div>';
    // Primary color section
    html += buildColorSection("Primary Color", "primary", PRIMARY_COLORS);
    // Accent color section
    html += buildColorSection('Accent Color <span style="font-size:0.65rem;' +
      'text-transform:none;letter-spacing:0;font-weight:400;opacity:0.7">' +
      '(hover &amp; links)</span>', "accent", ACCENT_COLORS);
    html += '<div class="accent-preview"><span>Hover preview: </span>' +
      '<a>hover over me</a></div>';
    // Reset button
    html += '<div class="section">' +
      '<button id="theme-reset" style="width:100%;text-align:center;' +
      'padding:0.5rem;cursor:pointer;border-radius:0.25rem;' +
      'border:1px solid var(--md-default-fg-color--lighter);' +
      'background:var(--md-default-bg-color);color:var(--md-default-fg-color);' +
      'font-size:0.8rem;">Reset to Default</button></div>';

    panel.innerHTML = html;
    document.body.appendChild(panel);

    // Toggle button (FAB)
    var toggle = document.createElement("button");
    toggle.className = "theme-chooser-toggle";
    toggle.setAttribute("aria-label", "Open theme chooser");
    toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" ' +
      'stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" ' +
      'stroke-width="2" viewBox="0 0 24 24">' +
      '<circle cx="12" cy="12" r="5"/>' +
      '<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42' +
      'M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    document.body.appendChild(toggle);

    // Open/close
    toggle.addEventListener("click", function() {
      panel.classList.add("open");
      overlay.classList.add("open");
      updateActiveStates(panel);
    });
    function closePanel() {
      panel.classList.remove("open");
      overlay.classList.remove("open");
    }
    overlay.addEventListener("click", closePanel);
    panel.querySelector(".close-btn").addEventListener("click", closePanel);

    // Scheme buttons
    var schemeBtns = panel.querySelectorAll("[data-scheme]");
    for (var i = 0; i < schemeBtns.length; i++) {
      schemeBtns[i].addEventListener("click", function() {
        var scheme = this.getAttribute("data-scheme");
        var current = getCurrentTheme();
        applyTheme(scheme, current.primary, current.accent);
        updateActiveStates(panel);
      });
    }

    // Primary swatches
    var primarySwatches = panel.querySelectorAll("[data-primary]");
    for (var j = 0; j < primarySwatches.length; j++) {
      primarySwatches[j].addEventListener("click", function() {
        var color = this.getAttribute("data-primary");
        var current = getCurrentTheme();
        applyTheme(current.scheme, color, current.accent);
        updateActiveStates(panel);
      });
    }

    // Accent swatches
    var accentSwatches = panel.querySelectorAll("[data-accent]");
    for (var k = 0; k < accentSwatches.length; k++) {
      accentSwatches[k].addEventListener("click", function() {
        var color = this.getAttribute("data-accent");
        var current = getCurrentTheme();
        applyTheme(current.scheme, current.primary, color);
        updateActiveStates(panel);
      });
    }

    // Reset
    panel.querySelector("#theme-reset").addEventListener("click", function() {
      applyTheme("default", "indigo", "indigo");
      updateActiveStates(panel);
    });

    return panel;
  }

  function buildColorSection(title, type, colors) {
    var html = '<div class="section"><h3>' + title + '</h3><div class="color-grid">';
    for (var i = 0; i < colors.length; i++) {
      var c = colors[i];
      var outline = c.name === "white" ? "outline:1px solid #ccc;" : "";
      html += '<button class="color-swatch" data-' + type + '="' + c.name + '" ' +
        'title="' + c.name + '" ' +
        'style="background:' + c.hex + ';' + outline + '"></button>';
    }
    html += '</div></div>';
    return html;
  }

  function updateActiveStates(panel) {
    var current = getCurrentTheme();
    // Scheme buttons
    var schemeBtns = panel.querySelectorAll("[data-scheme]");
    for (var i = 0; i < schemeBtns.length; i++) {
      schemeBtns[i].classList.toggle("active",
        schemeBtns[i].getAttribute("data-scheme") === current.scheme);
    }
    // Primary swatches
    var primarySwatches = panel.querySelectorAll("[data-primary]");
    for (var j = 0; j < primarySwatches.length; j++) {
      primarySwatches[j].classList.toggle("active",
        primarySwatches[j].getAttribute("data-primary") === current.primary);
    }
    // Accent swatches
    var accentSwatches = panel.querySelectorAll("[data-accent]");
    for (var k = 0; k < accentSwatches.length; k++) {
      accentSwatches[k].classList.toggle("active",
        accentSwatches[k].getAttribute("data-accent") === current.accent);
    }
  }

  // Wait for the bundle to finish its palette init, then build our panel
  // The bundle sets attributes on DOMContentLoaded, so we run after that
  function init() {
    buildPanel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      // Delay slightly to ensure bundle palette handler has run first
      setTimeout(init, 50);
    });
  } else {
    setTimeout(init, 50);
  }
})();
