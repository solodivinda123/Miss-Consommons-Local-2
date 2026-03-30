/**
 * Miss Consommons Local — interactions
 * [FR] Menu mobile, scroll fluide, formulaire, année, révélation au scroll
 */

(function () {
  "use strict";

  // Liste officielle des 24 communes de Kinshasa (ordre alphabétique courant)
  var COMMUNES = [
    "Bandalungwa",
    "Barumbu",
    "Bumbu",
    "Gombe",
    "Kalamu",
    "Kasa-Vubu",
    "Kimbanseke",
    "Kinshasa",
    "Kintambo",
    "Kisenso",
    "Lemba",
    "Limete",
    "Lingwala",
    "Makala",
    "Maluku",
    "Masina",
    "Matete",
    "Mont-Ngafula",
    "Ndjili",
    "Ngaba",
    "Ngaliema",
    "Ngiri-Ngiri",
    "Nsele",
    "Selembao",
  ];

  /* Photos locales par commune (priorité sur Pexels) */
  var COMMUNE_PHOTOS = {
    Gombe: "images/commune-gombe.png",
    "Kasa-Vubu": "images/commune-kasa-vubu.png",
    Kimbanseke: "images/commune-kimbanseke.png",
    Kinshasa: "images/commune-kinshasa.png",
    Kintambo: "images/commune-kintambo.png",
    Kisenso: "images/commune-kisenso.png",
    Masina: "images/commune-masina.png",
    Matete: "images/commune-matete.png",
    "Mont-Ngafula": "images/commune-mont-ngafula.png",
    Ndjili: "images/commune-ndjili.png",
    Ngaba: "images/commune-ngaba.png",
    Selembao: "images/commune-selembao.png",
  };

  /* Portraits Pexels — femmes noires (licence gratuite Pexels ; remplacer par photos officielles) */
  var PEXELS_PORTRAITS = [
    "3746277",
    "4625964",
    "9429372",
    "2667194",
    "3059748",
    "3764119",
    "5716005",
    "5407207",
    "6476589",
    "7550537",
    "3746277",
    "4625964",
    "9429372",
    "2667194",
    "3059748",
    "3764119",
    "5716005",
    "5407207",
    "6476589",
    "7550537",
    "3746277",
    "4625964",
    "9429372",
    "2667194",
  ];

  function portraitUrl(photoId, w) {
    w = w || 600;
    return (
      "https://images.pexels.com/photos/" +
      photoId +
      "/pexels-photo-" +
      photoId +
      ".jpeg?auto=compress&cs=tinysrgb&w=" +
      w
    );
  }

  function renderCommunes() {
    var grid = document.getElementById("communes-grid");
    if (!grid) return;

    var editionYear = grid.getAttribute("data-edition-year");
    var bioLine =
      "Ambassadrice du consommer local — biographie et engagements à compléter.";
    if (editionYear) {
      bioLine =
        "Ambassadrice du consommer local — édition " +
        editionYear +
        " — biographie et engagements à compléter.";
    }

    var html = COMMUNES.map(function (name, i) {
      var pid = PEXELS_PORTRAITS[i % PEXELS_PORTRAITS.length];
      var img = COMMUNE_PHOTOS[name] ? COMMUNE_PHOTOS[name] : portraitUrl(pid, 600);
      var altPortrait = COMMUNE_PHOTOS[name]
        ? "Portrait — Commune " + name
        : "Portrait placeholder Pexels (femme noire) — ambassadrice " + name;
      var delay = (i * 0.045).toFixed(3);
      return (
        '<div class="col-12 col-sm-6 col-lg-4 col-xl-3 reveal reveal-card" style="--reveal-delay: ' +
        delay +
        's">' +
        '<article class="card card-commune h-100 shadow-sm border-0">' +
        '<img src="' +
        img +
        '" alt="' +
        altPortrait +
        '" class="card-img-top" width="600" height="220" loading="lazy">' +
        '<div class="card-body d-flex flex-column">' +
        '<p class="text-muted small mb-1">Commune</p>' +
        '<h3 class="card-title h5">' +
        name +
        "</h3>" +
        '<p class="card-text small text-secondary flex-grow-1">' +
        bioLine +
        "</p>" +
        '<button type="button" class="btn btn-outline-secondary btn-sm align-self-start" disabled title="Détail à venir">En savoir plus</button>' +
        "</div></article></div>"
      );
    }).join("");

    grid.innerHTML = html;
  }

  function closeNavOnClick() {
    var nav = document.getElementById("navbarMain");
    if (!nav || !window.bootstrap) return;
    var collapse = bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth >= 992 || !nav.classList.contains("show")) return;
        /* Ne pas fermer le menu burger au clic sur le toggle du sous-menu « 24 communes » */
        if (link.classList.contains("dropdown-toggle")) return;
        collapse.hide();
      });
    });
  }

  function smoothScrollAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      if (anchor.getAttribute("data-bs-toggle") === "dropdown") return;
      anchor.addEventListener("click", function (e) {
        var id = this.getAttribute("href");
        if (id === "#" || id.length < 2) return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  function contactForm() {
    var form = document.getElementById("contact-form");
    var feedback = document.getElementById("contact-feedback");
    if (!form || !feedback) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var msg = form.querySelector('[name="message"]');
      if (!name.value.trim() || !email.value.trim()) {
        feedback.className = "alert alert-warning";
        feedback.textContent = "Merci de remplir au moins le nom et l’e-mail.";
        feedback.hidden = false;
        return;
      }
      feedback.className = "alert alert-success";
      feedback.textContent =
        "Merci ! Votre message a été noté (démonstration — branchez un backend ou un service d’e-mail pour l’envoi réel).";
      feedback.hidden = false;
      form.reset();
    });
  }

  function setYear() {
    var el = document.getElementById("year-copy");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initNavbarScroll() {
    var nav = document.querySelector(".navbar-mcl");
    if (!nav) return;
    function update() {
      if (window.scrollY > 56) nav.classList.add("navbar-mcl--scrolled");
      else nav.classList.remove("navbar-mcl--scrolled");
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /**
   * Hero : slides plein écran, zoom lent, barre de progression, pause au survol
   */
  function initHeroSlider() {
    var root = document.getElementById("hero-slider");
    if (!root) return;

    var intervalMs = parseInt(root.getAttribute("data-interval"), 10);
    if (!intervalMs || intervalMs < 3000) intervalMs = 9000;
    root.style.setProperty("--hero-interval", intervalMs + "ms");

    var slides = root.querySelectorAll(".hero-slide");
    var dots = root.querySelectorAll(".hero-slider__dot");
    var prevBtn = root.querySelector(".hero-slider__arrow--prev");
    var nextBtn = root.querySelector(".hero-slider__arrow--next");
    var fill = document.getElementById("hero-progress-fill");
    var timer = null;
    var current = 0;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function stopTimer() {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    }

    function resetProgress() {
      if (!fill || reduced) return;
      fill.classList.remove("is-running");
      void fill.offsetWidth;
      fill.classList.add("is-running");
    }

    function schedule() {
      stopTimer();
      if (reduced) return;
      timer = window.setTimeout(function () {
        goTo(current + 1);
      }, intervalMs);
    }

    function goTo(index) {
      var n = slides.length;
      if (n === 0) return;
      index = ((index % n) + n) % n;

      slides.forEach(function (slide, i) {
        var on = i === index;
        slide.classList.toggle("is-active", on);
        slide.setAttribute("aria-hidden", on ? "false" : "true");
      });

      dots.forEach(function (dot, i) {
        var sel = i === index;
        dot.classList.toggle("is-active", sel);
        dot.setAttribute("aria-selected", sel ? "true" : "false");
        dot.tabIndex = sel ? 0 : -1;
      });

      current = index;
      resetProgress();
      schedule();
    }

    if (prevBtn) prevBtn.addEventListener("click", function () {
      goTo(current - 1);
    });
    if (nextBtn) nextBtn.addEventListener("click", function () {
      goTo(current + 1);
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
      });
    });

    root.addEventListener("mouseenter", stopTimer);
    root.addEventListener("mouseleave", function () {
      schedule();
    });

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(current + 1);
      }
    });

    goTo(0);
    if (reduced && fill) {
      fill.style.width = "100%";
      fill.style.opacity = "0.6";
    }
  }

  function initReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.08 }
    );
    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCommunes();
    closeNavOnClick();
    smoothScrollAnchors();
    contactForm();
    setYear();
    initNavbarScroll();
    initHeroSlider();
    initReveal();
  });
})();
