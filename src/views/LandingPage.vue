<template>
  <div class="landing-page">
    <LandingCarousel />
    <LandingAbout />
    <LandingServices />
    <LandingPortfolio />
    <LandingPartners />
    <LandingPricing />
    <LandingTestimonials />
  </div>
</template>

<script setup lang="ts">
import LandingCarousel from "@/components/landing/LandingCarousel.vue";
import LandingAbout from "@/components/landing/LandingAbout.vue";
import LandingServices from "@/components/landing/LandingServices.vue";
import LandingPortfolio from "@/components/landing/LandingPortfolio.vue";
import LandingPricing from "@/components/landing/LandingPricing.vue";
import LandingTestimonials from "@/components/landing/LandingTestimonials.vue";
import LandingPartners from "@/components/landing/LandingPartners.vue";
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}
</style>
