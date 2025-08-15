<template>
  <section class="projects">
    <div class="projects-header">
      <span class="section-tag"> Portfolio Showcase</span>
      <h2>Featured Work</h2>
      <p class="subtext">
        A selection of projects where I've helped companies create meaningful<br />
        digital experiences that drive results.
      </p>
      <router-link to="/projects" class="view-all-button">
        View all projects <span>→</span>
      </router-link>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
          <div class="year-badge">{{ project.year }}</div>
        </div>
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p class="project-desc">{{ project.subtitle }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
          <div class="result-pill">
            <span>{{ project.result }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "FeaturedProjects",
  props: {
    projects: {
      type: Array as PropType<
        {
          id: number;
          title: string;
          subtitle: string;
          result: string;
          tags: string[];
          image: string;
          year: string;
        }[]
      >,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/featured-projects.scss";
</style>
