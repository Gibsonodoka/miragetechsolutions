<template>
  <section class="landing-about">
    <div class="container">
      <div class="about-grid">
        <!-- Left: Who We Work With -->
        <div class="about-left">
          <div class="section-title">
            <h2>Our Clients</h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Our Clients"
            class="about-image"
          />
          <p class="about-text">
            We empower CEOs, entrepreneurs, and creatives with impactful
            solutions.
          </p>
          <ul class="about-list">
            <li><i class="fas fa-user-tie"></i> 25+ Clients</li>
            <li><i class="fas fa-award"></i> 50+ Projects</li>
            <li><i class="fas fa-headset"></i> 24/7 Support</li>
          </ul>
          <div class="hotline">
            <i class="fas fa-phone-alt"></i>
            <span>Hotline: +(32) 978 654 321</span>
          </div>
          <button class="btn">Learn More</button>
        </div>

        <!-- Right: What We Do Best -->
        <div class="about-right">
          <div class="section-title">
            <h2>Our Expertise</h2>
          </div>
          <p class="about-text highlight">
            Mirage Brands delivers innovative, high-quality solutions for
            professionals.
          </p>
          <div class="services-grid">
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-book-open"></i>
              </div>
              <h4>Publishing</h4>
              <p>From idea to printed book.</p>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h4>Branding</h4>
              <p>Craft your unique identity.</p>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-bullhorn"></i>
              </div>
              <h4>Social Media</h4>
              <p>Elevate your online presence.</p>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-user-cog"></i>
              </div>
              <h4>Assistants</h4>
              <p>Support to streamline work.</p>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-print"></i>
              </div>
              <h4>Printing</h4>
              <p>Premium books and materials.</p>
            </div>
            <div class="service">
              <div class="service-icon">
                <i class="fas fa-print"></i>
              </div>
              <h4>Web & App Dev</h4>
              <p>Premium Designs</p>
            </div>
          </div>
          <div class="callout">
            <h3>Make your vision unforgettable.</h3>
            <button class="btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.landing-about {
  padding: 3rem 2rem;
  background: #f8fafc;
  font-family: "Inter", sans-serif;

  .container {
    max-width: 1280px;
    margin: auto;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .section-title {
    margin-bottom: 1.5rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #0f172a;
      position: relative;
      display: inline-block;

      &::after {
        content: "";
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background: #6b21a8;
        border-radius: 2px;
      }
    }
  }

  .about-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .about-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #475569;
    margin-bottom: 1.5rem;

    &.highlight {
      color: #6b21a8;
      font-weight: 500;
      background: #f3e8ff;
      padding: 1rem;
      border-radius: 8px;
    }
  }

  .about-list {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;

    li {
      font-size: 0.9rem;
      color: #0f172a;
      display: flex;
      align-items: center;
      padding: 0.5rem 0;
      transition: color 0.3s ease;

      i {
        margin-right: 0.75rem;
        color: #6b21a8;
        font-size: 1rem;
      }

      &:hover {
        color: #6b21a8;
      }
    }
  }

  .hotline {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: #475569;
    margin-bottom: 1.5rem;

    i {
      color: #6b21a8;
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }

    span {
      font-weight: 500;
    }
  }

  .btn {
    background: #6b21a8;
    color: #fff;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: #7c3aed;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .service {
    background: #fff;
    padding: 1.25rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .service-icon {
      width: 50px;
      height: 50px;
      margin: 0 auto 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3e8ff;
      border-radius: 50%;
      color: #6b21a8;
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.85rem;
      color: #475569;
      line-height: 1.5;
    }
  }

  .callout {
    margin-top: 2rem;
    text-align: center;
    padding: 1.5rem;
    background: #f3e8ff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    h3 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 1rem;
    }

    .btn {
      background: #6b21a8;
      color: #fff;

      &:hover {
        background: #7c3aed;
      }
    }
  }

  @media (max-width: 1024px) {
    .about-grid {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .about-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .section-title h2 {
      font-size: 1.8rem;
    }

    .callout h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .services-grid {
      grid-template-columns: 1fr;
    }

    .section-title h2 {
      font-size: 1.6rem;
    }

    .about-text {
      font-size: 0.9rem;
    }

    .callout {
      padding: 1rem;

      h3 {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
