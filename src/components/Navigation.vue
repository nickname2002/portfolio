<template>
  <nav class="navbar navbar-expand-lg bg-light px-3">
    <div class="container container-fluid">
      <!-- Site title -->
      <div class="site-title">
        <img class="portrait" src="../assets/portrait.jpg" alt="portrait" />
        <text class="navbar-brand" href="#">Nick Jordan</text>
      </div>

      <!-- Mobile toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 75px;
}

.site-title {
  display: flex;
  align-items: center;
}

.site-title text {
  color: black;
  text-decoration: none;
  font-family: 'Futura', sans-serif;
}

.portrait {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>
