/* ==========================================================================
   Helix24 Solutions — High-Performance Application Script
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ========== UTILITIES & HELPERS ========== */
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  /* ========== DARK / LIGHT THEME SWITCHER ========== */
  const themeToggleButtons = $$(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("helix_theme") || "light";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("helix_theme", theme);
    themeToggleButtons.forEach(btn => {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
    });
  }

  applyTheme(savedTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  });

  /* ========== MOBILE MENU TOGGLE ========== */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        mobileNav.classList.remove("open");
      });
    });
  }

  /* ========== ACTIVE PAGE LINK HIGHLIGHT ========== */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  $$("nav.links a, .mobile-nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === currentPath || (currentPath === "" && href === "index.html"))) {
      link.classList.add("active");
    }
  });

  /* ========== GSAP & SCROLLTRIGGER SETUP ========== */
  if (typeof gsap !== "undefined") {
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    /* ---------- Scroll Progress Bar ---------- */
    const scrollProgress = document.getElementById("scrollProgress");
    if (scrollProgress && typeof ScrollTrigger !== "undefined") {
      gsap.to(scrollProgress, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2
        }
      });
    }

    /* ---------- Navbar Scroll Effect ---------- */
    const navbar = document.getElementById("navbar");
    if (navbar && typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.create({
        start: "top -60",
        onUpdate: (self) => {
          if (self.scroll() > 60) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        }
      });
    }

    /* ---------- Magnetic Buttons ---------- */
    $$(".magnetic").forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.2, ease: "power1.out" });
      }, { passive: true });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
      });
    });

    /* ---------- 3D Floating Graphic Animation ---------- */
    const slabStage = document.getElementById("slabStage");
    if (slabStage) {
      gsap.to(slabStage, { rotateY: 12, rotateX: -5, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }

    /* ---------- Scroll Reveal Animations ---------- */
    if (typeof ScrollTrigger !== "undefined") {
      $$(".section-divider").forEach(div => {
        gsap.to(div, {
          scaleX: 1, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: div, start: "top 88%", toggleActions: "play none none reverse" }
        });
      });

      $$(".reveal-up").forEach(el => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      $$(".reveal-left").forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      $$(".reveal-right").forEach(el => {
        gsap.to(el, {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      $$(".reveal-scale").forEach(el => {
        gsap.to(el, {
          opacity: 1, scale: 1, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
        });
      });

      /* Bento Stagger */
      if ($(".bento")) {
        const bcells = gsap.utils.toArray(".bcell");
        gsap.fromTo(bcells, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.06,
          scrollTrigger: { trigger: ".bento", start: "top 85%", toggleActions: "play none none reverse" }
        });
      }

      /* Stat Counters */
      $$("[data-count]").forEach(el => {
        const target = parseFloat(el.dataset.count);
        const decimal = parseInt(el.dataset.decimal || "0");
        const suffix = decimal ? "" : "+";
        ScrollTrigger.create({
          trigger: el, start: "top 90%", once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target, duration: 1.5, ease: "power2.out",
              onUpdate: () => { el.textContent = decimal ? (obj.val / 10).toFixed(decimal) : Math.round(obj.val) + suffix; }
            });
          }
        });
      });

      /* Process line draw */
      if ($("#procLine")) {
        gsap.to("#procLine", {
          scaleX: 1, duration: 1, ease: "power2.inOut",
          scrollTrigger: { trigger: ".proc-grid", start: "top 80%", toggleActions: "play none none reverse" }
        });
      }
    }
  }

  /* ========== GPU ACCELERATED CURSOR GLOW (RAF Throttled) ========== */
  const cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow && window.innerWidth > 900) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let glowX = mouseX, glowY = mouseY;
    let isMoving = false;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
    }, { passive: true });

    function animateGlow() {
      if (isMoving) {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        cursorGlow.style.transform = `translate3d(${glowX - 180}px, ${glowY - 180}px, 0)`;
        if (Math.abs(mouseX - glowX) < 0.5 && Math.abs(mouseY - glowY) < 0.5) {
          isMoving = false;
        }
      }
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  /* ========== FAQ ACCORDIONS ========== */
  $$(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      $$(".faq-item").forEach(other => {
        if (other !== item) other.classList.remove("open");
      });

      item.classList.toggle("open", !isOpen);
    });
  });

  /* ========== FILTERABLE PORTFOLIO / CASE STUDIES ========== */
  const filterBtns = $$(".filter-btn");
  const caseCards = $$(".case-card");

  if (filterBtns.length > 0 && caseCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        caseCards.forEach(card => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "flex";
            if (typeof gsap !== "undefined") {
              gsap.fromTo(card, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.3 });
            }
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  /* ========== CASE STUDY DETAIL MODAL POPUPS ========== */
  const caseData = {
    "urbannest": {
      title: "UrbanNest Real Estate",
      tag: "SEO & Web Redesign",
      summary: "Migrated legacy slow website to modern Next.js 14 architecture with Google Local Pack SEO optimization.",
      challenge: "UrbanNest suffered from 4.5s load speeds and poor organic search ranking on regional real estate terms.",
      solution: "Engineered sub-second web platform, implemented structured data schemas, and launched targeted Google Search Ads.",
      results: ["+300% Organic Lead Growth", "0.8s Core Web Vitals Load Speed", "Page 1 Google Ranking for 18 High-Intent Terms"],
      stack: ["Next.js", "TypeScript", "Google Ads", "Schema.org JSON-LD", "TailwindCSS"]
    },
    "fittrack": {
      title: "FitTrack Pro App",
      tag: "Mobile App & Marketing",
      summary: "Built Flutter cross-platform booking application paired with Meta social acquisition funnels.",
      challenge: "FitTrack needed a unified iOS/Android mobile app to manage class schedules and client subscriptions.",
      solution: "Engineered 60fps Flutter app, integrated Apple Pay / Google Pay, and deployed automated retargeting funnels.",
      results: ["11x Monthly Bookings Surge", "4.8★ App Store & Play Store Rating", "45% Reduction in Acquisition CPA"],
      stack: ["Flutter", "Dart", "Firebase", "Meta Ads", "Stripe API"]
    },
    "bloom": {
      title: "Bloom Co. Apparel",
      tag: "Shopify E-Commerce",
      summary: "Custom Shopify Plus storefront rebuild with automated Google Shopping feeds and 1-click checkout optimization.",
      challenge: "High cart abandonment rates and slow product page load times on mobile devices.",
      solution: "Built custom Liquid theme, optimized mobile checkout flow, and connected automated Google Merchant feeds.",
      results: ["4.2x Return On Ad Spend (ROAS)", "+180% Total Revenue Surge", "34% Increase in Cart Conversions"],
      stack: ["Shopify Plus", "Liquid", "Google Shopping", "Klaviyo", "Meta Ads"]
    },
    "apex": {
      title: "Apex Logistics Portal",
      tag: "Custom ERP Software",
      summary: "Built cloud fleet dispatching portal and CRM system integrating automated GPS route calculation.",
      challenge: "Manual dispatching workflows caused delayed client deliveries and administrative bottlenecks.",
      solution: "Custom web app with real-time GPS tracking, automated driver dispatching, and role-based management dashboards.",
      results: ["50% Administrative Hours Saved Daily", "100% Real-Time Fleet Visibility", "Zero Dispatching System Outages"],
      stack: ["Python", "Django", "React", "PostgreSQL", "Google Maps API"]
    }
  };

  const modalOverlay = $("#caseModalOverlay");
  const modalCloseBtn = $("#modalCloseBtn");

  if (caseCards.length > 0 && modalOverlay) {
    caseCards.forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.caseId || "urbannest";
        const data = caseData[id] || caseData["urbannest"];

        $("#modalTag").textContent = data.tag;
        $("#modalTitle").textContent = data.title;
        $("#modalSummary").textContent = data.summary;
        $("#modalChallenge").textContent = data.challenge;
        $("#modalSolution").textContent = data.solution;

        const resList = $("#modalResultsList");
        if (resList) {
          resList.innerHTML = data.results.map(r => `<li style="margin-bottom:6px; font-weight:600; color:var(--violet);">✓ ${r}</li>`).join("");
        }

        const stackBox = $("#modalTechStack");
        if (stackBox) {
          stackBox.innerHTML = data.stack.map(s => `<span class="modal-tech-badge">${s}</span>`).join("");
        }

        modalOverlay.classList.add("active");
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  /* ========== FLOATING QUICK QUOTE DRAWER ========== */
  const quickFab = $("#quickQuoteFab");
  const drawerOverlay = $("#quickDrawerOverlay");
  const drawerCloseBtn = $("#drawerClose");
  const quickForm = $("#quickDrawerForm");

  if (drawerOverlay) {
    if (quickFab) {
      quickFab.addEventListener("click", () => {
        drawerOverlay.classList.add("active");
      });
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener("click", () => {
        drawerOverlay.classList.remove("active");
      });
    }

    drawerOverlay.addEventListener("click", (e) => {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove("active");
      }
    });

    if (quickForm) {
      quickForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const notice = $("#quickFormNotice");
        if (notice) {
          notice.style.display = "block";
          notice.textContent = "Thank you! Your project inquiry has been sent. We will respond within hours.";
        }
        quickForm.reset();
        setTimeout(() => {
          drawerOverlay.classList.remove("active");
          if (notice) notice.style.display = "none";
        }, 2500);
      });
    }
  }

  /* ========== CONTACT FORM VALIDATION ========== */
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const notice = $("#formNotice");
      const name = $("#formName") ? $("#formName").value.trim() : "";

      if (name) {
        if (notice) {
          notice.style.display = "block";
          notice.textContent = `Thank you, ${name}! Your inquiry has been submitted. We will send your custom strategy proposal within 24 hours.`;
        }
        contactForm.reset();
      }
    });
  }
});
