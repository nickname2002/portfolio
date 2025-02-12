<template>
  <div class="motto">
    <div class="container motto-content">
      <h2>“To infinity, and beyond!”</h2>
      <p>— Buzz Lightyear</p>
    </div>
  </div>
</template>

<style scoped>
.motto {
  background-image: url('/backdrops/motto.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.motto-content {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.motto-content h2 {
  font-size: 3rem;
  font-family: 'Dancing Script', cursive;
}

.motto-content p {
  font-size: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
}

@media (max-width: 768px) {
  .motto-content h2 {
    margin-left: 2rem;
  }

  .motto-content p {
    font-size: 1.25rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
