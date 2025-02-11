<template>
  <footer class="footer text-light py-4">
    <div class="container text-center">
      <div class="contact-section">
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
        <a href="https://www.linkedin.com/in/nick-jordan-11247bba/">
          <img class="social-icon" src="/social_icons/linkedin.png" />
        </a>
      </div>
      <p class="mb-1 copyright">&copy; 2025 Nick Jordan</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  background-color: rgba(245, 245, 245);
}

.contact-section {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 2px solid rgba(220, 220, 220);
  margin-bottom: 40px;
  color: black;
}

.contact-section h2 {
  font-size: 2rem;
  font-family: 'Futura', sans-serif;
}

.contact-section p {
  font-size: 1.25rem;
  font-family: 'Nunito Sans', sans-serif;
  padding-bottom: 20px;
}

.social-icon {
  width: 50px;
  height: 50px;
  filter: grayscale(100%);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  filter: grayscale(0%);
}

.copyright {
  color: #333;
  font-family: 'Futura', sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
