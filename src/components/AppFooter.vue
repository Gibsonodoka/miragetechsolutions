<template>
  <footer class="app-footer">
    <div class="footer-grid">
      <!-- Left Column -->
      <div class="footer-brand">
        <h2 class="name">Miragetechsolutions</h2>
        <p class="description">
          Creating meaningful digital experiences that users love and businesses
          need. Let's build something amazing together.
        </p>
        <p class="copyright">
          © 2025 Miragetechsolutions. All rights reserved.
        </p>
      </div>

      <!-- Work Column -->
      <div class="footer-column">
        <h3 class="column-title">Work</h3>
        <ul>
          <li><router-link to="/projects">Case Studies</router-link></li>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </div>

      <!-- Connect Column -->
      <div class="footer-column">
        <h3 class="column-title">Connect</h3>
        <ul>
          <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
        </ul>
      </div>

      <!-- Right Info -->
      <div class="footer-extra">
        <div class="legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #1a1a2e, #3a0ca3, #4361ee);
  color: #ddd;
  padding: 4rem 2rem 2rem;
  font-family: "Helvetica", sans-serif;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;
}

.footer-brand .name {
  color: #b98eff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-brand .description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #eee;
  max-width: 300px;
  margin-bottom: 1rem;
}

.footer-brand .copyright {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 1.5rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-column .column-title {
  font-weight: bold;
  color: #ccc;
  margin-bottom: 0.8rem;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 0.5rem;
}

.footer-column a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
}

.footer-column a:hover {
  color: #42b983;
}

.footer-extra {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.scroll-box {
  background: #f5f5f5;
  color: #333;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
}

.mouse-icon {
  border: 2px solid #b98eff;
  border-radius: 1rem;
  width: 24px;
  height: 36px;
  position: relative;
}

.mouse-icon .wheel {
  width: 4px;
  height: 8px;
  background: #b98eff;
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
}

.tick {
  font-size: 1.2rem;
  color: #b98eff;
}

.legal-links {
  display: flex;
  gap: 1.2rem;
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 0.5rem;
}

.legal-links a {
  color: inherit;
  text-decoration: none;
}

.legal-links a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-extra {
    align-items: flex-start;
    margin-top: 2rem;
  }
}
</style>
