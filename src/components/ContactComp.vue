<template>
  <section class="contact-section">
    <h2 class="headline">Ready to create something amazing together?</h2>
    <p class="subheadline">
      I am currently accepting Full Time Roles, Part time, contracts and
      exciting projects. Let’s discuss on how we can work together
    </p>

    <div class="badges">
      <span class="badge pink">
        <font-awesome-icon icon="circle" /> 12+ happy clients
      </span>
      <span class="badge yellow">
        <font-awesome-icon icon="circle" /> 5.0 average rating
      </span>
      <span class="badge green">
        <font-awesome-icon icon="circle" /> Usually responds in 24hrs
      </span>
    </div>

    <div class="card">
      <h3 class="help-title">What I can help with</h3>

      <div class="services-grid">
        <div class="service-card">
          <h4>Product Design</h4>
          <p>End-to-end product design from concept to launch</p>
        </div>
        <div class="service-card">
          <h4>Design Systems</h4>
          <p>Creating scalable design systems for growing teams</p>
        </div>
        <div class="service-card">
          <h4>User Research</h4>
          <p>Understanding users to inform design decisions</p>
        </div>
        <div class="service-card">
          <h4>Design Consultation</h4>
          <p>Strategic design advice for existing products</p>
        </div>
      </div>

      <p class="project-timeline">
        <strong>Typical project timeline:</strong>
        2–12 weeks depending on scope. I work with 1–2 clients at a time to
        ensure quality and attention.
      </p>

      <h3 class="conversation-title">Let's start a conversation</h3>

      <div class="contact-methods">
        <div class="method">
          <font-awesome-icon icon="envelope" class="icon pink" />
          <h4>Email</h4>
          <p>Brorhien@miragetechsolutions.com</p>
          <small>Best for project inquiries</small>
        </div>

        <div class="method">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon blue" />
          <h4>LinkedIn</h4>
          <p>linkedin.com/in/brorhien</p>
          <small>Let's connect professionally</small>
        </div>

        <div class="method">
          <font-awesome-icon :icon="['fas', 'calendar']" class="icon green" />
          <h4>Schedule a Call</h4>
          <p>cal.com/Brorhien</p>
          <small>For detailed project discussions</small>
        </div>
      </div>

      <div class="buttons">
        <a href="#contact" class="btn primary">Start a Project →</a>
        <a href="/resume.pdf" class="btn secondary" download>Download Resume</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "ContactComp",
};
</script>

<style scoped>
.contact-section {
  padding: 4rem 1rem;
  background: linear-gradient(to bottom right, #f6f6ff, #e8f6ff);
  text-align: center;
}

.headline {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #7b2ff7, #22a6f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subheadline {
  font-size: 1rem;
  color: #444;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.badge {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.badge.pink {
  background: #f5d1fb;
  color: #a300b8;
}

.badge.yellow {
  background: #fff3c4;
  color: #8a6d00;
}

.badge.green {
  background: #c3fce1;
  color: #007f5f;
}

.card {
  background: white;
  padding: 2.5rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.help-title {
  font-size: 1.2rem;
  color: #6b46c1;
  margin-bottom: 1.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.service-card {
  background: #f7f8ff;
  padding: 1rem;
  border-radius: 10px;
  text-align: left;
  box-shadow: inset 0 0 0 1px #e0e0f0;
}

.service-card h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.service-card p {
  font-size: 0.85rem;
  color: #555;
}

.project-timeline {
  background: #f0eaff;
  font-size: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: #444;
  margin-bottom: 2rem;
}

.project-timeline strong {
  color: #6b46c1;
}

.conversation-title {
  font-size: 1.1rem;
  color: #6b46c1;
  margin-bottom: 1rem;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem 3rem;
  margin-bottom: 2.5rem;
  justify-items: center;
}

.method {
  background: #f7f8ff;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 260px;
  text-align: center;
}

.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.icon.pink {
  color: #d63384;
}

.icon.blue {
  color: #0077b5;
}

.icon.green {
  color: #00c48c;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease-in-out;
}

.btn.primary {
  background: linear-gradient(to right, #7b2ff7, #22a6f0);
  color: white;
}

.btn.primary:hover {
  filter: brightness(1.1);
}

.btn.secondary {
  border: 2px solid #ccc;
  color: #333;
  background: transparent;
}

.btn.secondary:hover {
  background: #f2f2f2;
}

@media (max-width: 500px) {
  .contact-methods {
    grid-template-columns: 1fr;
  }
}
</style>
