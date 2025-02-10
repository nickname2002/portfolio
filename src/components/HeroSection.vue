<template>
  <div class="hero">
    <div class="hero-content">
      <h1>Nick Jordan</h1>
      <h3>Software Engineer & Game Developer</h3>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url('../../public/backdrops/hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Futura', sans-serif;
  font-size: 2rem;
  text-align: center;
  background-attachment: fixed;
  min-height: calc(100vh - 75px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content h1 {
  font-size: 400%;
}

.hero-content h3 {
  font-family: 'Nunito Sans', sans-serif;
}
</style>
