import { useState } from "react";

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
  const [formStatus, setFormStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState(
    "Fill out the form and we will get back to you shortly.",
  );

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
                className="nav-link"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="button button-primary nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Get Quote
            </a>
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

          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Efficiency Redefined</span>
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
                <a className="button button-secondary" href="#services">
                  Book a Site Visit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-light" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44OBPimPlj32VY3RfD5U_y6exvoUJF2uYCkajASye0JLrSvh5SE5RGACiNC9ArjOvVzE4sLkWEopL44ZQtpZTYuovOy5QP1HJ2Cl81p0FsputklUYV98vH60ZqhDBuid2ui1QnXHSQ9UiHoPtOu7sxYOdVDoqelZyQs70ds5on6adMjWZgOZ_R7DEgmeluX37pwj3c5BmfaBuU0ZmoNUB18Fdtf3O7DbR_C6TFyf0bEvE_oMd4RruQsND_CTMcIB6X93mJgsGtdDL"
                alt="Modern rooftop solar panel installation in Karachi"
              />
              <div className="about-badge">
                <strong>Est. 2022</strong>
                <span>Leading Energy Partner</span>
              </div>
            </div>

            <div className="about-copy">
              <span className="section-label">About Us</span>
              <h2>The Future of Power in Karachi</h2>
              <p>
                Trinergy Solar Solutions specializes in solar trading, installation, and expert
                energy services. Founded in 2022, the company helps clients transition to cleaner
                power with a mission to reduce energy dependency.
              </p>

              <div className="feature-grid">
                <article className="feature-card">
                  <div className="feature-icon">QF</div>
                  <h3>Quality First</h3>
                  <p>Tier-1 hardware standards and dependable workmanship across every project.</p>
                </article>
                <article className="feature-card">
                  <div className="feature-icon feature-icon-green">NW</div>
                  <h3>Nationwide</h3>
                  <p>Reliable trading, delivery, and support reach for clients across Pakistan.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="services">
          <div className="container">
            <div className="section-heading center">
              <span className="section-label section-label-green">Expertise</span>
              <h2>Our Core Services</h2>
            </div>

            <div className="cards-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-light" id="gallery">
          <div className="container">
            <div className="section-heading split">
              <div>
                <span className="section-label">Portfolio</span>
                <h2>Successful Projects</h2>
              </div>
              <p>
                From residential villas to industrial complexes, Trinergy brings solar efficiency
                to every roof it touches.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`project-card${project.featured ? " project-card-featured" : ""}${
                    project.wide ? " project-card-wide" : ""
                  }`}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="team">
          <div className="container team-grid">
            <div className="team-copy">
              <span className="section-label section-label-warm">Leadership</span>
              <h2>Meet Razzak Qureshi</h2>
              <p>
                CEO at Trinergy Solar Solutions Pvt. Ltd. and ZAQ Enterprises, Razzak Qureshi
                brings together engineering, investment, e-commerce, and imports and exports
                experience with a strong commitment to powering a more sustainable future through
                solar energy.
              </p>

              <div className="profile-meta">
                <div className="profile-pill">CEO at Trinergy Solar Solutions Pvt. Ltd.</div>
                <div className="profile-pill">Karachi, Sindh, Pakistan</div>
                <div className="profile-pill">SSUET Engineering Background</div>
              </div>

              <div className="strength-list">
                {teamHighlights.map((strength, index) => (
                  <article key={strength.title} className="strength-item">
                    <div className="strength-badge">{index + 1}</div>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="team-visual">
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
            <div className="contact-copy">
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
            </div>

            <div className="contact-panel">
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
        <div className="container footer-grid">
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
          <p>&copy; 2024 Trinergy Solar Solutions. Karachi, Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
