import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "ST",
    title: "Solar Trading",
    description:
      "Importing high-quality solar panels and inverters from China for nationwide distribution with direct sourcing and competitive pricing.",
  },
  {
    icon: "PI",
    title: "Professional Installation",
    description:
      "Expert residential and commercial solar setups tailored to the electrical architecture of each property for better yield and reliability.",
  },
  {
    icon: "CS",
    title: "Comprehensive Services",
    description:
      "Maintenance, diagnostics, and after-sales support that keep your energy system operating at peak performance year-round.",
  },
];

const aboutHighlights = [

  {
    badge: "QF",
    title: "Quality First",
    description: "Tier-1 hardware standards across every project.",
  },
  {
    badge: "NW",
    title: "Nationwide",
    description: "Reliable delivery and support across Pakistan.",
    accent: "green",
  },
  {
    value: "500+",
    title: "Homes Powered",
    description: "Trusted solar delivery for homes and growing businesses.",
    metric: true,
  },
  {
    value: "98%",
    title: "Efficiency Rate",
    description: "Systems planned for dependable output and long-term savings.",
    metric: true,
    accent: "green",
  },
  {
    value: "Why Trinergy",
    title: "Precision, reach, and proven solar performance. Rate",
    description: "Key strengths, shown in one compact mobile card.",
    metric: true,
  },
];

const projects = [
  {
    title: "Industrial Complex Alpha",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1YutZZdCsHYtj_Bvk5ToYoCKijtzMY9GH7TJwdpoXH2MPfio8EA1KNwdlnDYb0_WQiJJcj80En2pJwVbvvNeolU-3ahaAkF-MG-Ml8NFv5T9_UbzWe4zCcCdrd8oTj0DY_GCBo7TUBJZdgVzYBITG50DqT2-HJUzXBesM2nYA5PdNuG7LcVn4JD2eHDlVr1NIRhyZ-swIWiNx4N3yhgB39H-CUA6AJvjjV9i3vV-iis9R1ENXDokv8BqZ2PLNEMucatVUUS-KkD0Y",
    featured: true,
  },
  {
    title: "DHA Villa Project",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTM2MfSL5fTezTSaZanL_DSaODtfVgDq_sPLXW30bf9AqVkMhHoTkaz_LQ4r6C0QZh7GB-BREMmEGkSetkCoGRrLE-MxBmmhDdWwGBxcIJhQ9r-ab4Ap7fMzCXmkKLrMWUepxU_YGV_T9EcA998jrO7hyFG8ysoAvp3v3PcGGkKVy-U3Tz7IU7NUj9n4ydaQTGGVJ8Wq4oD8D685-_sUKtsNo1lAf59RRx0-LfLDDiDT32UQ9wVZCzzt0lMerC0yQD0wH6mwNnDQv",
  },
  {
    title: "Smart Inverter Setup",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFntykVkJZ4stiv_mffnSAdp0cvPz0w_BP1vsLdPTRB9yVV-_4nbZSpUBqaBavupmnYMvsOQ750aflBf7o76HP0qUWKwVbxNNdYP3KCIZw8zgEvP3GYOF_9irsZdsdud6fJipopv48SksU-JFU2_N6moSa-m3ZDAfPccwfeyskySEiOzBSBU8hgGS2rH-CP5ZayPqqsdxbZkOeBNnm5yqdgbNd4dKsPg2mcGQhR6715LsyNvVk-FYo2pUp_UdpcAHeuIahIfaAxFOC",
  },
  {
    title: "Commercial Hub Phase II",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZzSVLVGFWn-sCVeSvAA-8duWm8GkPGmonNJ4DtgLs0_OdvYRiwxjmBLsruFGks1bp5W3hL44pKc7ZXyQgFH6OpOH--y2qv42kyXvmH0X43-o6vgNDw6G76MA-Yef2gcpzQq0ltl9PY6Ho4HPVtguqNjVUsBGEGtErMrYlgwFfSybhLjWinRqqsa4RwaHsXeO3Xq_3kwNTfr8-dnCa4RmgcDMqlj2YdtffBl8PqFHqVI1NwlfaqpLydTwpSDimUXpKY1MgejupyL9",
    wide: true,
  },
];

const teamHighlights = [
  {
    title: "6+ Years Experience",
    description:
      "Built through engineering, imports and exports, and practical solar project execution.",
  },
  {
    title: "Leadership",
    description:
      "Leading Trinergy Solar Solutions Pvt. Ltd. with a strong focus on sustainable energy growth.",
  },
  {
    title: "Technical Foundation",
    description:
      "Engineering background from Sir Syed University of Engineering & Technology (SSUET).",
  },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Project Portfolio", href: "#gallery" },
  { label: "Our Expertise", href: "#team" },
  { label: "Privacy Policy", href: "#contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/trinergysolarsolutions",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/trinergy-solar-solutions/about/",
  },
];
const formSubmitEmail = "touqeershah32@gmail.com";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    typeof window !== "undefined" && window.location.hash ? window.location.hash : "#home",
  );
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState(
    "Fill out the form and we will get back to you shortly.",
  );
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8%",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-18% 0px -45%",
      },
    );

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    sections.forEach((section) => sectionObserver.observe(section));
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveAboutIndex((current) => (current + 1) % aboutHighlights.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveServiceIndex((current) => (current + 1) % services.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("submitting");
    setFormMessage("Sending your inquiry...");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(formSubmitEmail)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      const result = await response.json();

      if (!response.ok || result.success !== "true") {
        throw new Error("Submission failed");
      }

      form.reset();
      setFormStatus("success");
      setFormMessage("Thank you. Your inquiry has been sent successfully.");

      window.setTimeout(() => {
        window.location.hash = "home";
      }, 2200);
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Something went wrong while sending your inquiry. Please try again.");
    }
  }

  function showNextProject() {
    setActiveProjectIndex((current) => (current + 1) % projects.length);
  }

  function handleNavClick(href) {
    setActiveSection(href);
    setMenuOpen(false);
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label="Trinergy Solar Solutions home"
          >
            <img className="brand-logo" src="/screen.png" alt="Trinergy Solar Solutions logo" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                className={`nav-link${activeSection === item.href ? " is-active" : ""}`}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-media" aria-hidden="true">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeIwdf1HAMeqOPOBfcxwRLXKjACWowTTrakM57ZgJasmTbtN5zYd0OSDzKZI0SBMQ0dZDrBKd_XworMyiNrl1GM0bg8FU-59OckoW2c8hwVZ43Z0khOpU2Rs0CybC4ICl8CK2xwaCSbmRwM-QsMYgyggNfFIU1QU13VdXQib_yuaAAFZ39DtW2UAMyj51tEjR8-fVuqYP2WQbi_WF8SU8PN8Wi9ierrAQJHac7-EkaEzyhNgoEMRmubHkDZ24YaiBw6ymgc7fmhxLp"
              alt=""
            />
          </div>
          <div className="hero-glow hero-glow-primary" aria-hidden="true" />
          <div className="hero-glow hero-glow-secondary" aria-hidden="true" />

          <div className="container hero-content">
            <div className="hero-copy" data-reveal="up">
              <span className="hero-chip">
                <span className="hero-chip-dot" />
                The Future Is Solar
              </span>
              <h1>Captured. Harnessed. Empowered.</h1>
              <p>
                Smart, clean, and reliable solar energy solutions for homes and businesses in
                Pakistan. Trinergy helps you move toward dependable, sustainable power with
                confidence.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Get a Quote
                </a>
                <a className="button button-secondary" href="#contact">
                  Book a Site Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="about">
          <div className="container about-grid">
            <div className="about-visual" data-reveal="left">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44OBPimPlj32VY3RfD5U_y6exvoUJF2uYCkajASye0JLrSvh5SE5RGACiNC9ArjOvVzE4sLkWEopL44ZQtpZTYuovOy5QP1HJ2Cl81p0FsputklUYV98vH60ZqhDBuid2ui1QnXHSQ9UiHoPtOu7sxYOdVDoqelZyQs70ds5on6adMjWZgOZ_R7DEgmeluX37pwj3c5BmfaBuU0ZmoNUB18Fdtf3O7DbR_C6TFyf0bEvE_oMd4RruQsND_CTMcIB6X93mJgsGtdDL"
                alt="Modern rooftop solar panel installation in Karachi"
              />
              <div className="about-badge">
                <strong>Est. 2022</strong>
                <span>Leading Energy Partner</span>
              </div>
            </div>

            <div className="about-copy" data-reveal="right">
              <span className="section-label">About Us</span>
              <h2>The Future of Power in Karachi</h2>
              <p>
                Trinergy Solar Solutions specializes in solar trading, installation, and expert
                energy services. Founded in 2022, the company helps clients transition to cleaner
                power with a mission to reduce energy dependency.
              </p>
              <p>
                We combine practical engineering, fast sourcing, and installation discipline to
                deliver solar systems that feel dependable from planning to long-term support.
              </p>

              <div className="about-desktop-metrics" data-reveal="up" style={{ "--reveal-delay": "100ms" }}>
                <article className="about-desktop-metric-card">
                  <strong>500+</strong>
                  <span>Homes Powered</span>
                </article>
                <article className="about-desktop-metric-card about-desktop-metric-card-green">
                  <strong>98%</strong>
                  <span>Efficiency Rate</span>
                </article>
              </div>


            </div>
                          <div className="about-mobile-atlas" data-reveal="up" style={{ "--reveal-delay": "110ms" }}>
                <div className="about-mobile-flip-stack" aria-label="About highlights">

                  <article
                    key={`${activeAboutIndex}-${aboutHighlights[activeAboutIndex].title}`}
                    className={`about-mobile-flip-card${
                      aboutHighlights[activeAboutIndex].metric ? " about-mobile-flip-card-metric" : ""
                    }${aboutHighlights[activeAboutIndex].accent === "green" ? " is-green" : ""}`}
                  >
                    {aboutHighlights[activeAboutIndex].metric ? (
                      <strong>{aboutHighlights[activeAboutIndex].value}</strong>
                    ) : (
                      <span
                        className={`about-mobile-dot${
                          aboutHighlights[activeAboutIndex].accent === "green"
                            ? " about-mobile-dot-green"
                            : ""
                        }`}
                      >
                        {aboutHighlights[activeAboutIndex].badge}
                      </span>
                    )}
                    <h3>{aboutHighlights[activeAboutIndex].title}</h3>
                    <p>{aboutHighlights[activeAboutIndex].description}</p>
                  </article>

                  <div className="about-mobile-controls">
                    <div className="about-mobile-dots" aria-label="About position">
                      {aboutHighlights.map((item, index) => (
                        <button
                          key={item.title}
                          type="button"
                          className={index === activeAboutIndex ? "is-active" : ""}
                          onClick={() => setActiveAboutIndex(index)}
                          aria-label={`Show ${item.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <section className="section section-muted" id="services">
          <div className="container">
            <div className="section-heading center" data-reveal="up">
              <span className="section-label section-label-green">Expertise</span>
              <h2>Our Core Services</h2>
            </div>

            <div className="cards-grid">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="service-card"
                  data-reveal="up"
                  style={{ "--reveal-delay": `${index * 110 + 60}ms` }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="mobile-service-carousel" data-reveal="up" style={{ "--reveal-delay": "180ms" }}>
              <article className={`mobile-service-card service-theme-${activeServiceIndex}`}>
                <div className="mobile-service-card-top">
                  <div className="service-icon">{services[activeServiceIndex].icon}</div>
                </div>
                <h3>{services[activeServiceIndex].title}</h3>
                <p>{services[activeServiceIndex].description}</p>
              </article>

              <div className="mobile-service-controls">
                <div className="mobile-service-dots" aria-label="Service position">
                  {services.map((service, index) => (
                    <button
                      key={service.title}
                      type="button"
                      className={index === activeServiceIndex ? "is-active" : ""}
                      onClick={() => setActiveServiceIndex(index)}
                      aria-label={`Show ${service.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="section section-portfolio" id="gallery">
          <div className="container">
            <div className="section-heading split" data-reveal="up">
              <div>
                <span className="section-label section-label-warm">Portfolio</span>
                <h2>Successful Projects</h2>
              </div>
              <p>
                From residential villas to industrial complexes, Trinergy brings solar efficiency
                to every roof it touches.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`project-card${project.featured ? " project-card-featured" : ""}${
                    project.wide ? " project-card-wide" : ""
                  }`}
                  data-reveal="up"
                  style={{ "--reveal-delay": `${index * 90 + 40}ms` }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mobile-gallery-carousel" data-reveal="up" style={{ "--reveal-delay": "120ms" }}>
              <button
                className="mobile-gallery-card"
                type="button"
                onClick={showNextProject}
                aria-label="Show next project"
              >
                <img src={projects[activeProjectIndex].image} alt={projects[activeProjectIndex].title} />
                <div className="mobile-gallery-overlay">
                  <span className="mobile-kicker">Tap For Next</span>
                  <h3>{projects[activeProjectIndex].title}</h3>
                </div>
              </button>

              <div className="mobile-gallery-controls">
                <div className="mobile-gallery-dots" aria-label="Gallery position">
                  {projects.map((project, index) => (
                    <button
                      key={project.title}
                      type="button"
                      className={index === activeProjectIndex ? "is-active" : ""}
                      onClick={() => setActiveProjectIndex(index)}
                      aria-label={`Show ${project.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="team">
          <div className="container team-grid">
            <div className="team-copy" data-reveal="left">
              <span className="section-label section-label-warm">Leadership</span>
              <h2>Meet Razzak Qureshi</h2>
              <p>
                CEO at Trinergy Solar Solutions Pvt. Ltd. and ZAQ Enterprises, Razzak Qureshi
                brings together engineering, investment, e-commerce, and imports and exports
                experience with a strong commitment to powering a more sustainable future through
                solar energy.
              </p>

              <div className="mobile-team-summary" data-reveal="up" style={{ "--reveal-delay": "70ms" }}>
                <div className="mobile-team-spotlight">
                  <span className="mobile-kicker">Our Founder</span>
                  <h3>Engineering-led solar growth for Karachi and beyond.</h3>
                </div>
                <div className="mobile-team-mini-stats">
                  <article>
                    <strong>6+</strong>
                    <span>Years</span>
                  </article>
                  <article>
                    <strong>CEO</strong>
                    <span>Leadership</span>
                  </article>
                  <article>
                    <strong>SSUET</strong>
                    <span>Engineering</span>
                  </article>
                </div>
              </div>

              <div className="profile-meta">
                <div className="profile-pill">CEO at Trinergy Solar Solutions Pvt. Ltd.</div>
                <div className="profile-pill">Karachi, Sindh, Pakistan</div>
                <div className="profile-pill">SSUET Engineering Background</div>
              </div>

              <div className="strength-list">
                {teamHighlights.map((strength, index) => (
                  <article
                    key={strength.title}
                    className="strength-item"
                    data-reveal="up"
                    style={{ "--reveal-delay": `${index * 100 + 80}ms` }}
                  >
                    <div className="strength-badge">{index + 1}</div>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="team-visual" data-reveal="right">
              <div className="team-ring">
                <img src="/image.png" alt="Razzak Qureshi, CEO of Trinergy Solar Solutions" />
              </div>
              <div className="team-stat">
                <strong>6+</strong>
                <span>Years of experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal="left">
              <span className="section-label">Contact Us</span>
              <h2>Start Your Solar Journey</h2>

              <div className="contact-stack">
                <article className="contact-item">
                  <div className="contact-icon">01</div>
                  <div>
                    <h3>Visit Our Office</h3>
                    <p>
                      Office no. 706, 7th Floor Portway Trade Center, 188 Shahrah-e-Faisal Service
                      Rd N, Karachi.
                    </p>
                  </div>
                </article>

                <article className="contact-item">
                  <div className="contact-icon contact-icon-green">02</div>
                  <div>
                    <h3>Call Us Directly</h3>
                    <p className="contact-highlight">+92 333 9220769</p>
                  </div>
                </article>

                <div className="whatsapp-row">
                  <a className="whatsapp-button" href="#contact" aria-label="WhatsApp support">
                    WA
                  </a>
                  <span>WhatsApp Support</span>
                </div>
              </div>

              <div className="mobile-contact-actions" data-reveal="up" style={{ "--reveal-delay": "140ms" }}>
                <a className="mobile-contact-card" href="tel:+923339220769">
                  <span className="mobile-contact-card-icon">CL</span>
                  <strong>Direct Line</strong>
                  <span>+92 333 9220769</span>
                </a>
                <a className="mobile-contact-card mobile-contact-card-green" href="https://wa.me/923339220769">
                  <span className="mobile-contact-card-icon">WA</span>
                  <strong>WhatsApp</strong>
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            <div className="contact-panel" data-reveal="right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Trinergy Solar Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_url" value="https://trinergy-solar-solutions.com/#contact" />
                <div className="form-row">
                  <label>
                    <span>Your Name</span>
                    <input name="name" type="text" placeholder="Enter your name" required />
                  </label>

                  <label>
                    <span>Email Address</span>
                    <input name="email" type="email" placeholder="Enter your email" required />
                  </label>
                </div>

                <label>
                  <span>Service Required</span>
                  <select name="service" defaultValue="Residential Installation">
                    <option>Residential Installation</option>
                    <option>Commercial Solutions</option>
                    <option>Trading / Bulk Inquiry</option>
                    <option>Maintenance Service</option>
                  </select>
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your property and energy needs."
                    required
                  />
                </label>

                <label className="hidden-field" aria-hidden="true">
                  <span>Company</span>
                  <input type="text" name="_honey" tabIndex="-1" autoComplete="off" />
                </label>

                <p className={`form-note form-note-${formStatus}`}>
                  {formMessage}
                </p>

                <button
                  className="button button-primary button-full"
                  type="submit"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid" data-reveal="up">
          <div>
            <img className="footer-logo" src="/screen.png" alt="Trinergy Solar Solutions logo" />
            <p>
              Empowering Pakistan with smart energy solutions through dependable products,
              thoughtful engineering, and quality installations.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Social Connect</h3>
            <div className="footer-links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Trinergy Solar Solutions. Karachi, Pakistan. All rights reserved.</p>
        </div>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Mobile section navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href ? "is-active" : ""}
            onClick={() => handleNavClick(item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;
