<template>
  <section class="landing-portfolio">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Work</h2>
        <p class="section-subtitle">Explore our latest projects</p>
      </div>

      <div class="portfolio-grid">
        <!-- Project 1 -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img
              src="@/assets/images/books/book1.jpg"
              alt="Corporate Branding Project"
            />
            <div class="overlay">
              <div class="overlay-content">
                <h3>Corporate Branding</h3>
                <p>Visual identity for a tech startup</p>
                <router-link to="/projects" class="view-btn">
                  View Project
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="Book Publishing Project"
            />
            <div class="overlay">
              <div class="overlay-content">
                <h3>Leadership Book</h3>
                <p>Publishing for an industry expert</p>
                <router-link to="/projects" class="view-btn"
                  >View Project</router-link
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img src="@/assets/images/work1.jpg" alt="Social Media Campaign" />
            <div class="overlay">
              <div class="overlay-content">
                <h3>Social Media Campaign</h3>
                <p>Growth strategy for a lifestyle brand</p>
                <router-link to="/projects" class="view-btn"
                  >View Project</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/projects" class="cta-btn"
        >View All Projects</router-link
      >
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap");

.landing-portfolio {
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

  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .portfolio-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

      .overlay {
        opacity: 1;
      }
    }

    .portfolio-image {
      position: relative;
      aspect-ratio: 4/3;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: 1rem;

      .overlay-content {
        text-align: center;
        color: #fff;

        h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1rem;
        }
      }
    }

    .view-btn {
      display: inline-block; /* Ensures button doesn't take full width */
      background: #6b21a8;
      color: #fff;
      padding: 0.5rem 1.25rem; /* Smaller padding for compact size */
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

  .cta-btn {
    display: block;
    margin: 0 auto;
    background: #6b21a8;
    color: #fff;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: #7c3aed;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }

    .portfolio-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;

    .section-title {
      font-size: 1.8rem;
    }

    .section-subtitle {
      font-size: 0.9rem;
    }

    .portfolio-item .overlay .overlay-content {
      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.85rem;
      }

      .view-btn {
        padding: 0.4rem 1rem; /* Even smaller padding for mobile */
        font-size: 0.8rem;
      }
    }
  }
}
</style>
