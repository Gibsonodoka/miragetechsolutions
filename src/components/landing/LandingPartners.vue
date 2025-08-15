<template>
  <section class="landing-partners">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Partners</h2>
        <p class="section-subtitle">Trusted by leading brands</p>
      </div>
      <div class="partners-row">
        <div
          v-for="(logo, index) in partnerLogos"
          :key="index"
          class="partner-logo"
        >
          <img :src="logo.src" :alt="logo.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import brand1 from "@/assets/images/brand1.png";
import brand2 from "@/assets/images/brand2.jpg";
import brand3 from "@/assets/images/brand3.png";
import brand4 from "@/assets/images/brand4.jpg";
import brand5 from "@/assets/images/brand5.png";

const partnerLogos = [
  { name: "Brand 1", src: brand1 },
  { name: "Brand 2", src: brand2 },
  { name: "Brand 3", src: brand3 },
  { name: "Brand 4", src: brand4 },
  { name: "Brand 5", src: brand5 },
];
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

.landing-partners {
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

  .partners-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    justify-items: center;
    align-items: center;
    padding: 1rem 0;
  }

  .partner-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 100%;
      max-height: 120px;
      object-fit: contain;
      filter: grayscale(100%) opacity(0.7);
      transition: filter 0.3s ease, transform 0.3s ease;
    }

    &:hover img {
      filter: grayscale(0%) opacity(1);
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 0.9rem;
    }

    .partners-row {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 1rem;
    }

    .partner-logo img {
      max-height: 40px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .partner-logo {
      padding: 0.5rem;
    }

    .partner-logo img {
      max-height: 36px;
    }
  }
}
</style>
