<script setup lang="ts">
import ProjectComponent from './ProjectComponent.vue'

// TODO: Create yaml files for project properties
// TODO: Build an interface for project properties, to minimize props
// TODO: Place real descriptions inside yaml file for import
const dummyDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate " +
  "neque a arcu vestibulum, a volutpat arcu auctor. Integer vel massa ac arcu elementum vulputate. " +
  "Fusce mollis velit non risus laoreet, ac eleifend dui scelerisque. Donec fermentum lorem eu " +
  "tincidunt suscipit. Nullam quis sapien ut purus euismod tincidunt. Ut sed ante vitae urna luctus " +
  "tincidunt. Sed vehicula felis vel felis bibendum, ut mollis neque malesuada. Donec consequat " +
  "bibendum magna, id pharetra nulla facilisis nec.";
</script>

<template>
  <div class="project-container">
    <div class="container project-content">
      <!-- Echoes of the Shattering -->
      <ProjectComponent
        icon-url="public/project_icons/eos.png"
        name="Echoes of the Shattering"
        :description="$t('projects.eos.description')"
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
        :description="$t('projects.tommy.description')"
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
        :description="$t('projects.ooak.description')"
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
        :description="$t('projects.monozenith.description')"
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
        :description="$t('projects.slitherzenith.description')"
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
        :description="$t('projects.overflowsim.description')"
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
        :description="$t('projects.found.description')"
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
