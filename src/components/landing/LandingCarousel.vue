<template>
  <section
    class="landing-carousel"
    :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
  >
    <div class="overlay"></div>
    <div class="hero-content" :class="{ active: animate }">
      <h1>{{ slides[currentSlide].title }}</h1>
      <p>{{ slides[currentSlide].description }}</p>
      <button class="cta-button">
        Explore Our Services
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="slide-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import LocalHeroImage from "@/assets/images/hero2.jpg";

const slides = ref([
  {
    title: "Simplifying Your Vision, Elevating Your Brand",
    description:
      "At Mirage Brands, we turn complexity into clarity. Whether you're a busy entrepreneur, a thought leader, or a visionary author, we help you build a powerful brand, publish your ideas, and show up confidently online.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Transforming Ideas Into Visual Identities",
    description:
      "From book publishing to social media branding, our team helps you stand out with purpose and professionalism.",
    image: LocalHeroImage,
  },
]);

const currentSlide = ref(0);
const animate = ref(false);

let intervalId;

const goToSlide = (index) => {
  animate.value = false;
  setTimeout(() => {
    currentSlide.value = index;
    animate.value = true;
  }, 300);
};

onMounted(() => {
  animate.value = true;

  intervalId = setInterval(() => {
    animate.value = false;
    setTimeout(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
      animate.value = true;
    }, 300);
  }, 6000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.landing-carousel {
  position: relative;
  padding: 1rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-image 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  max-width: 900px;
  padding: 2rem;
  color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.hero-content.active {
  opacity: 1;
  transform: translateY(0);
}

.hero-content h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-content p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-inline: auto;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  color: #fff;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
}

.cta-button:hover {
  background: linear-gradient(135deg, #6d28d9 0%, #2563eb 100%);
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(124, 58, 237, 0.4);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

.slide-indicators {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
  z-index: 3;
}

.slide-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.slide-indicators button.active {
  background: #fff;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .landing-carousel {
    padding: 6rem 1.5rem;
    min-height: 90vh;
  }

  .hero-content {
    padding: 1rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
  }
}

@media (max-width: 480px) {
  .landing-carousel {
    padding: 5rem 1rem;
  }

  .slide-indicators {
    bottom: 1.5rem;
  }
}
</style>
