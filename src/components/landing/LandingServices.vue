<template>
  <section class="landing-services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Premium Services</h2>
        <p class="section-subtitle">Tailored for excellence</p>
      </div>

      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="icon-wrapper">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p class="highlight">{{ service.tagline }}</p>
          <p class="description">{{ service.description }}</p>
          <div v-if="service.badges?.length" class="badges">
            <span v-for="badge in service.badges" :key="badge" class="badge">{{
              badge
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Book Publishing",
    icon: "fas fa-book-open",
    tagline: "Ideas to reality.",
    description: "Ghostwriting, editing, printing, and launch support.",
    badges: ["Authors", "Coaches"],
  },
  {
    title: "Branding & Design",
    icon: "fas fa-palette",
    tagline: "Unforgettable identity.",
    description: "Logos, color palettes, typography, and assets.",
    badges: ["Identity Kits"],
  },
  {
    title: "Social Media",
    icon: "fas fa-bullhorn",
    tagline: "Premium storytelling.",
    description: "Facebook and Instagram management with branded content.",
    badges: ["Content Strategy"],
  },
  {
    title: "Virtual Assistant",
    icon: "fas fa-user-cog",
    tagline: "Grow faster.",
    description: "Inbox, scheduling, and admin support.",
    badges: ["Email", "Scheduling"],
  },
  {
    title: "High-End Printing",
    icon: "fas fa-print",
    tagline: "Precision prints.",
    description: "Books, banners, and branded materials.",
    badges: ["Books", "Banners"],
  },
  {
    title: "Web & App Development",
    icon: "fas fa-code",
    tagline: "Mobile App and Web dev.",
    description: "Mobile App, Websites, Debugging.",
    badges: ["Mobile", "Web"],
  },
];
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

.landing-services {
  background: linear-gradient(180deg, #f8fafc, #e2e8f0);
  padding: 4rem 1rem;
  font-family: "Inter", sans-serif;

  .container {
    max-width: 1280px;
    margin: auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      font-size: 1rem;
      color: #64748b;
      max-width: 500px;
      margin: auto;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .service-card {
    background: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    border: 1px solid #e5e7eb;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .icon-wrapper {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #6b21a8, #3b82f6);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      font-size: 1.5rem;
      margin: 0 auto 1rem;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }

    .highlight {
      font-size: 0.9rem;
      color: #6b21a8;
      font-weight: 500;
      margin-bottom: 0.75rem;
    }

    .description {
      font-size: 0.85rem;
      color: #475569;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;

      .badge {
        background: #f3e8ff;
        color: #6b21a8;
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 2rem;
    }

    .service-card {
      padding: 1.25rem;
    }
  }
}
</style>
