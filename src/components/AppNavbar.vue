<!-- src/components/AppNavbar.vue -->
<template>
  <header class="app-navbar">
    <div class="container">
      <router-link to="/" class="site-logo">
        <img src="@/assets/logo.png" alt="Mirage Tech Solutions Logo" />
      </router-link>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/projects" exact-active-class="active"
          >Projects</router-link
        >
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.app-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 1rem 0;
  font-family: "Inter", sans-serif;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-logo {
  display: flex;
  align-items: center;

  img {
    height: 40px; /* Adjust based on your logo's size */
    width: auto;
    object-fit: contain;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
    transition: color 0.3s ease;

    &:hover {
      color: #6b21a8;
    }

    &.active {
      color: #6b21a8;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .site-logo img {
    height: 32px; /* Smaller logo on mobile */
  }

  .nav-links {
    gap: 1rem;

    a {
      font-size: 0.85rem;
    }
  }
}

@media (max-width: 480px) {
  .site-logo img {
    height: 28px;
  }

  .nav-links {
    gap: 0.75rem;

    a {
      font-size: 0.8rem;
    }
  }
}
</style>
