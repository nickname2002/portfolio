<template>
  <div class="introduction">
    <div class="container introduction-content">
      <img class="portrait" src="../assets/portrait.jpg" alt="portrait" />
      <h1>{{ $t('introduction.title') }}</h1>
      <p>{{ $t('introduction.about1') }}</p>
      <p>{{ $t('introduction.about2') }}</p>
    </div>
  </div>
</template>

<style scoped>
.introduction-content {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.portrait {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.introduction-content h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-family: 'Jost', sans-serif;
}

.introduction-content p {
  font-family: 'Nunito Sans', sans-serif;
}

@media (max-width: 768px) {
  .portrait {
    width: 100px;
    height: 100px;
  }

  .introduction-content h1 {
    font-size: 1.5rem;
  }

  .introduction-content p {
    font-size: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
</style>
