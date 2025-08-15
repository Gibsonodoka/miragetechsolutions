<template>
  <section class="landing-testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Client Stories</h2>
        <p class="section-subtitle">Hear from those we’ve empowered</p>
      </div>

      <Swiper
        :modules="modules"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        loop
        class="testimonial-swiper"
      >
        <SwiperSlide v-for="(t, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <img :src="t.image" :alt="t.name" class="testimonial-img" />
            <p class="testimonial-text">"{{ t.text }}"</p>
            <h4 class="testimonial-name">{{ t.name }}</h4>
            <span class="testimonial-role">{{ t.role }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import client1 from "@/assets/images/client1.png";
import client2 from "@/assets/images/client2.jpg";
import client3 from "@/assets/images/client3.png";

const modules = [Autoplay, Pagination];

const testimonials = [
  {
    name: "Francesca Paul",
    role: "Founder, Braid Fanatic LLC. UNITED STATES OF AMERICA",
    text: "Thank you Usena Omoh Guraise and the TEAM for gracing your full strength within this FULL project. Thank you my Grphic team, marketing team, fashion team we DID IT and Everyone God placed with us",
    image: client1,
  },
  {
    name: "Mr Philip, Turning Lemons to Lemonades",
    role: "CEO, House of Perfection. NIGERIA",
    text: "Thank you Omoh, for doing a fantastic job as the Book Project Manager, for your brilliant ideas in making the book a bestseller. Thanks for your enthusiasm throughout the journey and for your patience during those countless brainstorming sessions. I will recommend her to anybody who needs a Book Project Consultant. She's simply amazing!",
    image: client2,
  },
  {
    name: "Samuel Kevin",
    role: "Entrepreneur UNITED KINGDOM",
    text: "Best Publishers",
    image: client3,
  },
];
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

.landing-testimonials {
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

  .testimonial-swiper {
    padding-bottom: 2.5rem;
  }

  .testimonial-card {
    max-width: 450px;
    margin: 0 auto;
    background: #fff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .testimonial-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin: 0 auto 1rem;
      border: 2px solid #6b21a8;
    }

    .testimonial-text {
      font-size: 1rem;
      color: #475569;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .testimonial-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 0.25rem;
    }

    .testimonial-role {
      font-size: 0.85rem;
      color: #64748b;
    }
  }

  :deep(.swiper-pagination-bullet) {
    background: #d1d5db;
    opacity: 1;
    width: 8px;
    height: 8px;
    transition: background 0.3s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #6b21a8;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 0.9rem;
    }

    .testimonial-card {
      max-width: 400px;
      padding: 1.25rem;

      .testimonial-img {
        width: 50px;
        height: 50px;
      }

      .testimonial-text {
        font-size: 0.9rem;
      }

      .testimonial-name {
        font-size: 1rem;
      }

      .testimonial-role {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .testimonial-card {
      max-width: 350px;
      padding: 1rem;

      .testimonial-img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
</style>
