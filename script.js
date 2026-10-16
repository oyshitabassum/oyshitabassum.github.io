(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
  if (!links.length) return;

  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (!sections.length) return;

  function setCurrent(id) {
    links.forEach(function (link) {
      var on = id && link.getAttribute("href") === "#" + id;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  function update() {
    var id = "";
    var line = 120;
    var atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 8;

    if (atBottom) {
      id = sections[sections.length - 1].id;
    } else {
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= line) id = section.id;
      });
    }

    setCurrent(id);
  }

  var scheduled = false;
  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      update();
    });
  }

  document.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("hashchange", onScroll);
  update();
})();
