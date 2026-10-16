(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".index a"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function setCurrent(id) {
    links.forEach(function (link) {
      var on = link.getAttribute("href") === "#" + id;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });

  setCurrent("top");
})();
