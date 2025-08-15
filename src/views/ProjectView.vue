<template>
  <div>
    <FullProject :projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FullProject from "@/components/FullProject.vue";

export default defineComponent({
  name: "ProjectView",
  components: { FullProject },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "E-Commerce App",
          subtitle: "Modern shopping platform",
          result: "Boosted sales by 40%",
          tags: ["Vue", "Firebase", "Stripe"],
          image: require("@/assets/projects/project1.png"),
          year: "2023",
          category: "Mobile App",
        },
        {
          id: 2,
          title: "Portfolio Website",
          subtitle: "Personal branding site",
          result: "Increased traffic by 60%",
          tags: ["Nuxt", "Tailwind"],
          image: require("@/assets/projects/project2.png"),
          year: "2024",
          category: "Web App",
        },
        {
          id: 3,
          title: "Admin Dashboard",
          subtitle: "Business analytics tool",
          result: "Improved efficiency by 35%",
          tags: ["Vue", "D3.js"],
          image: require("@/assets/projects/project3.png"),
          year: "2024",
          category: "Dashboard",
        },
        {
          id: 4,
          title: "Finance Tracker",
          subtitle: "Personal budget tracking",
          result: "Helped users save more",
          tags: ["Vue", "Chart.js"],
          image: require("@/assets/projects/project4.png"),
          year: "2024",
          category: "Mobile App",
        },
        {
          id: 5,
          title: "CMS Platform",
          subtitle: "Content management system",
          result: "Streamlined publishing workflows",
          tags: ["Nuxt", "Sanity"],
          image: require("@/assets/projects/project5.png"),
          year: "2024",
          category: "Web App",
        },
        {
          id: 6,
          title: "Admin Interface",
          subtitle: "Control panel for SaaS",
          result: "Reduced admin time by 50%",
          tags: ["Vue", "Tailwind", "Firebase"],
          image: require("@/assets/projects/project6.png"),
          year: "2024",
          category: "Dashboard",
        },
      ],
    };
  },
});
</script>
