<template>
  <section class="landing-pricing">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Pricing</h2>
        <p class="section-subtitle">Clear plans, exceptional value</p>
      </div>

      <div class="pricing-grid">
        <!-- Book Publishing -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="service-name">Book Publishing</h3>
            <div class="price">$500+</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Full publishing support</li>
              <li>Editing & design</li>
              <li>Printing & distribution</li>
            </ul>
            <button class="card-cta">Get Started</button>
          </div>
          <div class="card-badge">Most Popular</div>
        </div>

        <!-- Branding Kits -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="service-name">Branding Kits</h3>
            <div class="price">$500+</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Logo & identity</li>
              <li>Brand guidelines</li>
              <li>Stationery design</li>
            </ul>
            <button class="card-cta">Get Started</button>
          </div>
        </div>

        <!-- VA Support -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="service-name">VA Support</h3>
            <div class="price">Custom Quote</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Tailored support</li>
              <li>Flexible hours</li>
              <li>Skilled assistants</li>
            </ul>
            <button class="card-cta">Contact Us</button>
          </div>
        </div>

        <!-- Printing -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="service-name">Printing</h3>
            <div class="price">Variable</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Premium materials</li>
              <li>Fast delivery</li>
              <li>Bulk discounts</li>
            </ul>
            <button class="card-cta" @click="scrollToContact">Get Quote</button>
          </div>
        </div>
      </div>

      <div class="pricing-disclaimer">
        <p>* Pricing finalized after consultation</p>
      </div>
    </div>
  </section>

  <section class="landing-contact" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="section-title">Let's Connect</h2>
        <p class="section-subtitle">
          Got a project? Need help choosing a plan? We're here for you.
        </p>
      </div>

      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <a href="mailto:miragebrandscontact@gmail.com"
                >miragebrandscontact@gmail.com</a
              >
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info-content">
              <h3>Phone</h3>
              <a href="tel:08066355255">(080) 6635 5255</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <i class="fab fa-instagram"></i>
            </div>
            <div class="info-content">
              <h3>Instagram</h3>
              <a
                href="https://instagram.com/mirage.digital.solutions"
                target="_blank"
                >@mirage.digital.solutions</a
              >
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="info-content">
              <h3>Facebook</h3>
              <a href="https://facebook.com/MirageBrands" target="_blank"
                >Mirage Brands</a
              >
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label for="name">Name</label>
            </div>

            <div class="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label for="email">Email</label>
            </div>

            <div class="form-group">
              <input type="tel" id="phone" placeholder=" " />
              <label for="phone">Phone</label>
            </div>

            <div class="form-group">
              <select id="service" required>
                <option value="" disabled selected>Select a service</option>
                <option value="publishing">Book Publishing</option>
                <option value="branding">Branding Kits</option>
                <option value="va">VA Support</option>
                <option value="printing">Printing</option>
                <option value="other">Other</option>
              </select>
              <label for="service">Service</label>
            </div>

            <div class="form-group">
              <textarea
                id="message"
                rows="4"
                placeholder=" "
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleSubmit = () => {
  console.log("Form submitted");
};

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.landing-pricing {
  padding: 3rem 1rem;
  background: #f8fafc;
  font-family: "Inter", sans-serif;

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;

    .section-title {
      font-size: 2.25rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1rem;
      color: #475569;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .pricing-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e5e7eb;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .card-header {
      padding: 1.5rem;
      background: #f9fafb;

      .service-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 0.5rem;
      }

      .price {
        font-size: 1.5rem;
        font-weight: 700;
        color: #6b21a8;
      }
    }

    .card-body {
      padding: 1.5rem;

      .features {
        list-style: none;
        padding: 0;
        margin-bottom: 1.5rem;

        li {
          font-size: 0.9rem;
          color: #475569;
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;

          &::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #6b21a8;
            font-weight: 600;
          }
        }
      }

      .card-cta {
        width: 100%;
        background: #6b21a8;
        color: #fff;
        border: none;
        padding: 0.75rem;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.3s ease;

        &:hover {
          background: #7c3aed;
          transform: translateY(-2px);
        }
      }
    }

    .card-badge {
      position: absolute;
      top: 1rem;
      right: -28px;
      background: #6b21a8;
      color: #fff;
      padding: 0.25rem 2rem;
      font-size: 0.75rem;
      font-weight: 600;
      transform: rotate(45deg);
      transform-origin: center;
    }
  }

  .pricing-disclaimer {
    text-align: center;
    font-size: 0.85rem;
    color: #475569;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }

    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }
}

.landing-contact {
  padding: 3rem 1rem;
  background: #f8fafc;
  font-family: "Inter", sans-serif;

  .contact-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 2.5rem;

    .section-title {
      font-size: 2.25rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1rem;
      color: #475569;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .contact-info {
    display: grid;
    gap: 1rem;

    .info-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }

      .info-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3e8ff;
        border-radius: 50%;
        color: #6b21a8;
        font-size: 1rem;
      }

      .info-content {
        h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        a {
          color: #475569;
          text-decoration: none;
          transition: color 0.2s ease;

          &:hover {
            color: #6b21a8;
          }
        }
      }
    }
  }

  .contact-form {
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #e5e7eb;

    .form-group {
      position: relative;
      margin-bottom: 1.25rem;

      label {
        position: absolute;
        top: 12px;
        left: 12px;
        color: #64748b;
        font-size: 0.85rem;
        pointer-events: none;
        transition: all 0.2s ease;
        background: #fff;
        padding: 0 4px;
      }

      input,
      textarea,
      select {
        width: 100%;
        padding: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        font-size: 0.9rem;
        font-family: "Inter", sans-serif;
        transition: all 0.2s ease;

        &:focus {
          outline: none;
          border-color: #6b21a8;
          box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.2);
        }

        &:focus + label,
        &:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.7rem;
          color: #6b21a8;
        }
      }

      textarea {
        resize: vertical;
        min-height: 100px;
      }

      select {
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 14px;
      }
    }

    .submit-btn {
      width: 100%;
      background: #6b21a8;
      color: #fff;
      border: none;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s ease, transform 0.3s ease;

      &:hover {
        background: #7c3aed;
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .contact-grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .info-item {
      flex-direction: column;
      gap: 0.75rem;

      .info-icon {
        width: 36px;
        height: 36px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
