<template>
  <section class="projects">
    <div class="container">
      <div class="projects-header">
        <h2 class="section-title">Our Projects</h2>
        <p class="section-subtitle">
          Discover our diverse work across industries
        </p>

        <div class="filter-buttons">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="['filter-button', { active: activeCategory === cat }]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="year-badge">{{ project.year }}</div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-desc">{{ project.subtitle }}</p>
            <div class="tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
            <div class="result-pill">
              <span>{{ project.result }}</span>
            </div>
            <a :href="project.link" target="_blank" class="project-link"
              >View Project</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Import book images
import book1 from "@/assets/images/books/book1.jpg";
import book2 from "@/assets/images/books/book4.jpg";
import book3 from "@/assets/images/books/book3.jpg";
import book4 from "@/assets/images/books/book10.jpg";
import book5 from "@/assets/images/books/book11.jpg";

// Import mobile app images
import project1 from "@/assets/projects/project1.png";
import project4 from "@/assets/projects/project4.png";

// Placeholder images for web apps (replace with actual paths if available)

import project5 from "@/assets/projects/project5.png";
import project6 from "@/assets/projects/project6.png";

// Define project type
interface Project {
  id: number;
  title: string;
  subtitle: string;
  result: string;
  tags: string[];
  image: string;
  year: string;
  category: string;
  link: string;
}

const projects = ref<Project[]>([
  // Books
  {
    id: 1,
    title: "Heros Heritage",
    subtitle: "Inspirational guide to personal growth",
    result: "Published Book",
    tags: ["Self-Help", "Motivation"],
    image: book1,
    year: "2025",
    category: "Books",
    link: "https://miragetechsolutions.com/projects/heros-heritage",
  },
  {
    id: 2,
    title: "Turning Lemons to Lemonade",
    subtitle: "Strategies for overcoming challenges",
    result: "Bestseller",
    tags: ["Self-Help", "Inspiration"],
    image: book2,
    year: "2024",
    category: "Books",
    link: "https://miragetechsolutions.com/projects/lemons-to-lemonade",
  },
  {
    id: 3,
    title: "Living Beyond",
    subtitle: "Inspirational guide to personal growth",
    result: "Educational Resource",
    tags: ["Psychology", "Education"],
    image: book3,
    year: "2025",
    category: "Books",
    link: "https://miragetechsolutions.com/projects/living-beyond",
  },
  {
    id: 4,
    title: "Getting Married",
    subtitle: "A modern guide to wedding planning",
    result: "Published Book",
    tags: ["Lifestyle", "Relationships"],
    image: book4,
    year: "2024",
    category: "Books",
    link: "https://miragetechsolutions.com/projects/getting-married",
  },
  {
    id: 5,
    title: "Believers Provision",
    subtitle: "Spiritual guide for faith-based living",
    result: "Community Impact",
    tags: ["Spirituality", "Faith"],
    image: book5,
    year: "2025",
    category: "Books",
    link: "https://miragetechsolutions.com/projects/believers-provision",
  },
  // Mobile Apps
  {
    id: 6,
    title: "Ecommerce App",
    subtitle: "Seamless shopping experience on mobile",
    result: "Increased Sales",
    tags: ["Ecommerce", "Mobile"],
    image: project1,
    year: "2024",
    category: "Mobile App",
    link: "https://miragetechsolutions.com/projects/ecommerce-app",
  },
  {
    id: 7,
    title: "WhatsApp Messenger Video Status",
    subtitle: "Enhanced video sharing for WhatsApp users",
    result: "User Engagement",
    tags: ["Social Media", "Mobile"],
    image: project4,
    year: "2024",
    category: "Mobile App",
    link: "https://miragetechsolutions.com/projects/whatsapp-video-status",
  },
  // Web Apps

  {
    id: 9,
    title: "Event Web App",
    subtitle: "All-in-one platform for event management",
    result: "Event Success",
    tags: ["Events", "Web"],
    image: project5,
    year: "2024",
    category: "Web App",
    link: "https://miragetechsolutions.com/projects/event-web-app",
  },
  {
    id: 10,
    title: "Gero Care Web App",
    subtitle: "Healthcare access for elderly patients",
    result: "Enhanced Care",
    tags: ["Healthcare", "Web"],
    image: project6,
    year: "2025",
    category: "Web App",
    link: "https://miragetechsolutions.com/projects/gero-care",
  },
]);

const activeCategory = ref("All");
const categories = ["All", "Books", "Mobile App", "Web App", "Dashboard"];

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") return projects.value;
  return projects.value.filter(
    (p: Project) =>
      p.category.toLowerCase() === activeCategory.value.toLowerCase()
  );
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

.projects {
  padding: 3rem 1rem;
  background: #f8fafc;
  font-family: "Inter", sans-serif;

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  &-header {
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
      margin: 0 auto 1.5rem;
    }
  }

  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;

    .filter-button {
      padding: 0.5rem 1.25rem;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #fff;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 600;
      color: #475569;
      transition: all 0.3s ease;

      &.active,
      &:hover {
        background: #6b21a8;
        color: #fff;
        border-color: #6b21a8;
      }
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .project-image {
      position: relative;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .year-badge {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        background: #6b21a8;
        color: #fff;
        padding: 0.3rem 0.75rem;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 600;
      }
    }

    .project-content {
      padding: 1.25rem;

      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 0.5rem;
      }

      .project-desc {
        font-size: 0.9rem;
        color: #475569;
        margin-bottom: 1rem;
        line-height: 1.5;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;

        .tag {
          background: #f3e8ff;
          color: #6b21a8;
          font-size: 0.8rem;
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          font-weight: 500;
        }
      }

      .result-pill {
        display: inline-flex;
        background: #f3e8ff;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        color: #6b21a8;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .project-link {
        display: inline-block;
        background: #6b21a8;
        color: #fff;
        padding: 0.5rem 1.25rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.3s ease, transform 0.3s ease;

        &:hover {
          background: #7c3aed;
          transform: translateY(-2px);
        }
      }
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

    .projects-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }

    .project-card .project-image img {
      height: 180px;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .filter-buttons {
      gap: 0.5rem;

      .filter-button {
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
      }
    }

    .project-card .project-content {
      padding: 1rem;

      h3 {
        font-size: 1.1rem;
      }

      .project-desc {
        font-size: 0.85rem;
      }

      .project-link {
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
