<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue'
</script>

<template>
  <div class="project-container">
    <div class="container project-content">
      <!-- Echoes of the Shattering -->
      <ProjectComponent
        icon-url="public/project_icons/eos.png"
        name="Echoes of the Shattering"
        type="Persoonlijk, Game"
        collaborators="2"
        status="Beta, On Hold"
        devPeriod="09/2024 - 2/2025"
        tools="MonoZenith, C#"
      />

      <!-- TOMMY -->
      <ProjectComponent
        icon-url="public/project_icons/tommy.png"
        name="TOMMY"
        type="Universiteitsproject, Desktop Applicatie"
        collaborators="8"
        status="Afgerond"
        devPeriod="02/2024 - 07/2024"
        tools="Python, Qt for Python"
      />

      <!-- The Odyssey of a Knight: Into the Reto-Verse -->
      <ProjectComponent
        icon-url="public/project_icons/ooak.png"
        name="The Odyssey of a Knight: Into the Reto-Verse"
        type="Persoonlijk, Game"
        collaborators="1 (Solo)"
        status="Afgerond"
        devPeriod="07/2023 - 08/2023 (6 weken)"
        tools="SlitherZenith, Python"
      />

      <!-- MonoZenith -->
      <ProjectComponent
        icon-url="public/project_icons/monozenith.png"
        name="MonoZenith"
        type="Persoonlijk, Game Framework"
        collaborators="1 (Solo)"
        status="Sporadisch"
        devPeriod="09/2022 - Heden"
        tools="MonoGame, C#"
      />

      <!-- SlitherZenith -->
      <ProjectComponent
        icon-url="public/project_icons/slitherzenith.png"
        name="SlitherZenith"
        type="Persoonlijk, Game Framework"
        collaborators="1 (Solo)"
        status="Sporadisch"
        devPeriod="07/2022 - Heden"
        tools="Pygame, Python"
      />

      <!-- OverflowSim -->
      <ProjectComponent
        icon-url="public/project_icons/overflowsim.png"
        name="OverflowSim"
        type="Universiteitsproject, Desktop Applicatie"
        collaborators="3"
        status="Completed"
        devPeriod="03/2023 - 04/2023"
        tools="Windows Forms, C#"
      />

      <!-- Found -->
      <ProjectComponent
        icon-url="public/project_icons/found.png"
        name="Found"
        type="Persoonlijk, Game"
        collaborators="1 (Solo)"
        status="Completed"
        devPeriod="06/2020 - 09/2020"
        tools="Unity, C#"
      />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: lightgray;
  background-image: url('public/backdrops/mountains.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
