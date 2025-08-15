<template>
  <div class="about">
    <section class="about-hero">
      <h1>About Me</h1>
      <p class="subtitle">Get to know me better</p>
    </section>

    <section class="about-content">
      <div class="about-text">
        <h2>Who I Am</h2>
        <p>
          I'm a passionate [Your Profession] with [X] years of experience in
          creating digital experiences. I specialize in [Your Specializations].
        </p>

        <p>
          My journey in tech began when [Your Story]. Since then, I've worked
          with various companies and clients to deliver high-quality solutions.
        </p>

        <h2>My Approach</h2>
        <p>
          I believe in [Your Philosophy]. My work is driven by [Your Values].
        </p>

        <h2>Education</h2>
        <ul class="education-list">
          <li v-for="edu in education" :key="edu.degree">
            <h3>{{ edu.degree }}</h3>
            <p>{{ edu.institution }} | {{ edu.year }}</p>
          </li>
        </ul>
      </div>

      <div class="about-image">
        <img src="@/assets/images/about-me.jpg" alt="About Me" />
      </div>
    </section>

    <section class="experience">
      <h2>Work Experience</h2>
      <div class="timeline">
        <div
          v-for="(exp, index) in experience"
          :key="exp.company"
          class="timeline-item"
          :class="{ right: index % 2 !== 0 }"
        >
          <div class="timeline-content">
            <h3>{{ exp.position }}</h3>
            <h4>{{ exp.company }}</h4>
            <p class="date">{{ exp.duration }}</p>
            <p>{{ exp.description }}</p>
            <ul v-if="exp.responsibilities">
              <li v-for="(resp, i) in exp.responsibilities" :key="i">
                {{ resp }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>What People Say</h2>
      <div class="testimonial-grid">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonial-card"
        >
          <div class="quote">"{{ testimonial.quote }}"</div>
          <div class="author">
            <img :src="testimonial.avatar" :alt="testimonial.name" />
            <div>
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  data() {
    return {
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "University Name",
          year: "2015-2019",
        },
        {
          degree: "Web Development Bootcamp",
          institution: "Coding School",
          year: "2020",
        },
      ],
      experience: [
        {
          position: "Frontend Developer",
          company: "Tech Company Inc.",
          duration: "2021 - Present",
          description:
            "Developing and maintaining web applications using modern JavaScript frameworks.",
          responsibilities: [
            "Built responsive user interfaces with Vue.js",
            "Collaborated with UX designers to implement designs",
            "Optimized application performance",
          ],
        },
        {
          position: "Junior Developer",
          company: "Startup Solutions",
          duration: "2019 - 2021",
          description:
            "Worked on various client projects as part of a small agile team.",
          responsibilities: [
            "Implemented new features based on client requirements",
            "Fixed bugs and improved existing code",
            "Participated in code reviews",
          ],
        },
      ],
      testimonials: [
        {
          quote:
            "Working with [Your Name] was a great experience. They delivered high-quality code on time and was always open to feedback.",
          name: "John Smith",
          position: "CTO at Tech Company",
          avatar: require("@/assets/images/avatar1.jpg"),
        },
        {
          quote:
            "Exceptional attention to detail and creative problem-solving skills. Would definitely work with them again.",
          name: "Sarah Johnson",
          position: "Product Manager",
          avatar: require("@/assets/images/avatar2.jpg"),
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #42b983, #35495e);
  color: white;
  margin: 0 -2rem 3rem;
  border-radius: 0 0 20px 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
  }
}

.about-content {
  display: flex;
  gap: 3rem;
  margin-bottom: 5rem;

  h2 {
    color: #42b983;
    margin: 2rem 0 1rem;
    font-size: 1.8rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}

.about-text {
  flex: 2;
}

.about-image {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

.education-list {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    h3 {
      margin-bottom: 0.3rem;
    }

    p {
      color: #666;
      margin: 0;
    }
  }
}

.experience {
  margin: 5rem 0;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
  }
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #42b983;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 4px solid #42b983;
    border-radius: 50%;
    top: 15px;
    z-index: 1;
  }

  &.right {
    left: 50%;

    &::after {
      left: -12px;
    }
  }

  &:not(.right)::after {
    right: -12px;
  }
}

.timeline-content {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h3 {
    color: #42b983;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  .date {
    color: #666;
    font-style: italic;
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 20px;
    margin-top: 0.5rem;

    li {
      margin-bottom: 0.3rem;
    }
  }
}

.testimonials {
  margin: 5rem 0;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
  }
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  .quote {
    font-style: italic;
    margin-bottom: 1.5rem;
    position: relative;

    &::before {
      content: '"';
      font-size: 3rem;
      color: #42b983;
      opacity: 0.3;
      position: absolute;
      left: -15px;
      top: -15px;
    }
  }

  .author {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin: 0;
    }

    p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }
  }
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .timeline {
    &::after {
      left: 31px;
    }
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &.right {
      left: 0;
    }

    &::after {
      left: 21px;
    }
  }
}
</style>
