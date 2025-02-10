<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue'
</script>

<template>
  <div class="project-container">
    <div class="container project-content">
      <!-- Echoes of the Shattering -->
      <ProjectComponent
        icon-url="/project_icons/eos.png"
        name="Echoes of the Shattering"
        :description="$t('projects.eos.description')"
        :type="$t('projects.eos.type')"
        collaborators="2"
        :status="$t('projects.eos.status')"
        devPeriod="09/2024 - 2/2025"
        tools="MonoZenith, C#"
      />

      <!-- TOMMY -->
      <ProjectComponent
        icon-url="/project_icons/tommy.png"
        name="TOMMY"
        :description="$t('projects.tommy.description')"
        :type="$t('projects.tommy.type')"
        collaborators="8"
        :status="$t('projects.tommy.status')"
        devPeriod="02/2024 - 07/2024"
        tools="Python, Qt for Python"
      />

      <!-- The Odyssey of a Knight: Into the Retro-Verse -->
      <ProjectComponent
        icon-url="/project_icons/ooak.png"
        name="The Odyssey of a Knight: Into the Retro-Verse"
        :description="$t('projects.ooak.description')"
        :type="$t('projects.ooak.type')"
        collaborators="1 (Solo)"
        :status="$t('projects.ooak.status')"
        devPeriod="07/2023 - 08/2023 (6 weken)"
        tools="SlitherZenith, Python"
      />

      <!-- MonoZenith -->
      <ProjectComponent
        icon-url="/project_icons/monozenith.png"
        name="MonoZenith"
        :description="$t('projects.monozenith.description')"
        :type="$t('projects.monozenith.type')"
        collaborators="1 (Solo)"
        :status="$t('projects.monozenith.status')"
        devPeriod="09/2022 - Heden"
        tools="MonoGame, C#"
      />

      <!-- SlitherZenith -->
      <ProjectComponent
        icon-url="/project_icons/slitherzenith.png"
        name="SlitherZenith"
        :description="$t('projects.slitherzenith.description')"
        :type="$t('projects.slitherzenith.type')"
        collaborators="1 (Solo)"
        :status="$t('projects.slitherzenith.status')"
        devPeriod="07/2022 - Heden"
        tools="Pygame, Python"
      />

      <!-- OverflowSim -->
      <ProjectComponent
        icon-url="/project_icons/overflowsim.png"
        name="OverflowSim"
        :description="$t('projects.overflowsim.description')"
        :type="$t('projects.overflowsim.type')"
        collaborators="3"
        :status="$t('projects.overflowsim.status')"
        devPeriod="03/2023 - 04/2023"
        tools="Windows Forms, C#"
      />

      <!-- Found -->
      <ProjectComponent
        icon-url="/project_icons/found.png"
        name="Found"
        :description="$t('projects.found.description')"
        :type="$t('projects.found.type')"
        collaborators="1 (Solo)"
        :status="$t('projects.found.status')"
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
  background-image: url('/backdrops/mountains.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
