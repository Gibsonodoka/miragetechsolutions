<template>
  <section class="design-philosophy">
    <div class="container">
      <h2 class="section-title">My Design Philosophy</h2>
      <div class="philosophy-grid">
        <!-- Left Column: Cards -->
        <div class="cards-column">
          <div class="card" v-for="(item, index) in principles" :key="index">
            <div class="card-content">
              <div
                class="icon-box"
                :class="{
                  red: index === 0 || index === 3,
                  blue: index === 1 || index === 2,
                }"
              >
                <font-awesome-icon :icon="item.icon" />
              </div>
              <div class="text-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Tools -->
        <div class="tools-card">
          <h3>Tools I Love</h3>
          <div class="tools-lists">
            <div>
              <h4>Design</h4>
              <ul>
                <li v-for="tool in tools.design" :key="tool">
                  <span class="bullet bullet-purple"></span> {{ tool }}
                </li>
              </ul>
            </div>
            <div>
              <h4>Research</h4>
              <ul>
                <li v-for="tool in tools.research" :key="tool">
                  <span class="bullet bullet-teal"></span> {{ tool }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <h3 class="skills-title">Skills & Expertise</h3>
        <div class="skills-grid">
          <span v-for="(skill, i) in skills" :key="i" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const principles = [
  {
    icon: ["fas", "user-check"],
    title: "User-First Thinking",
    description:
      "Every decision starts with understanding user needs and behaviors",
  },
  {
    icon: ["fas", "sync-alt"],
    title: "Iterate & Improve",
    description: "Design is never “done” — there’s always room for improvement",
  },
  {
    icon: ["fas", "users"],
    title: "Collaborate Always",
    description: "Great products are built by great teams working together",
  },
  {
    icon: ["fas", "lightbulb"],
    title: "Keep It Simple",
    description: "The best solutions are often the simplest ones",
  },
];

const tools = {
  design: ["Figma", "Framer", "Sketch", "Adobe Illustrator"],
  research: ["Miro", "Google Workspace", "Excalidraw", "Notion"],
};

const skills = [
  "UX Design",
  "Prototyping",
  "Wire-framing",
  "Design System",
  "Style Guide",
  "HTML, CSS & Javascript",
  "Sketching",
  "Team Management",
  "Design Ops",
  "Design Thinking",
  "Communication",
  "Design Documentation",
  "Information Architecture",
];
</script>

<style scoped>
.design-philosophy {
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(to bottom right, #f9fafe, #e7f3fc);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #3a3af4;
  text-align: center;
  margin-bottom: 3rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: 2fr 1.3fr;
  gap: 3rem;
}

.cards-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  display: flex;
  align-items: center;
}

.card:hover {
  transform: translateY(-4px);
}

.card-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon-box {
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  border-radius: 8px;
  border: 2px solid;
  animation: pop 0.5s ease;
}

.icon-box.red {
  border-color: #e53935;
  color: #e53935;
  background: #fdecea;
}

.icon-box.blue {
  border-color: #3a3af4;
  color: #3a3af4;
  background: #eaefff;
}

.text-content h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.text-content p {
  margin-top: 0.25rem;
  font-size: 0.95rem;
  color: #666;
}

@keyframes pop {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Tools Section */
.tools-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tools-card h3 {
  margin-bottom: 1.5rem;
  color: #3a3af4;
  font-size: 1.4rem;
}

.tools-lists {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.tools-lists h4 {
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
}

.tools-lists ul {
  list-style: none;
  padding-left: 0;
}

.tools-lists li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #333;
}

.bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
}

.bullet-purple {
  background-color: #7b2ff7;
}

.bullet-teal {
  background-color: #00c48c;
}

/* Skills Section */
.skills-section {
  margin-top: 4rem;
  text-align: center;
}

.skills-title {
  font-size: 1.8rem;
  color: #008060;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-pill {
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 992px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .cards-column {
    grid-template-columns: 1fr;
  }

  .tools-card {
    margin-top: 2rem;
  }
}
</style>
