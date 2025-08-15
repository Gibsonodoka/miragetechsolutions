<template>
  <section class="landing-contact" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="section-title">Let's Connect</h2>
        <p class="section-subtitle">Got a project? We're here to help.</p>
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
              <a href="mailto:info@miragetechsolutions.com"
                >info@miragetechsolutions.com</a
              >
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="info-content">
              <h3>Phone</h3>
              <a href="tel:+2348066355255">+234 806 635 5255</a>
              <a href="tel:+2348123456789">+234 806 635 5255</a>
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
              <input
                type="text"
                id="name"
                v-model="form.name"
                placeholder=" "
                required
              />
              <label for="name">Name</label>
            </div>

            <div class="form-group">
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>

            <div class="form-group">
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                placeholder=" "
              />
              <label for="phone">Phone</label>
            </div>

            <div class="form-group">
              <select id="service" v-model="form.service" required>
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
                v-model="form.message"
                rows="4"
                placeholder=" "
                required
              ></textarea>
              <label for="message">Message</label>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.value = { name: "", email: "", phone: "", service: "", message: "" };
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again later.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

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
    align-items: start;
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
        flex-shrink: 0;
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
          display: block;
          font-size: 0.9rem;

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

      &:disabled {
        background: #d1d5db;
        cursor: not-allowed;
        transform: none;
      }
    }
  }

  @media (max-width: 1024px) {
    .contact-grid {
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .contact-header {
      margin-bottom: 2rem;

      .section-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 0.9rem;
      }
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }

    .contact-form {
      padding: 1.25rem;
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
