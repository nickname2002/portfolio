<script setup lang="ts">

</script>

<template>
  <div class="tech-stack-container">
    <div class="container tech-stack-content">
      <h1 class="title">{{ $t('techstack.title') }}</h1>
      <h3 class="subtitle">{{ $t('techstack.description') }}</h3>
      <div class="tools">
        <!-- Languages -->
        <div class="category">
          <h2>Talen</h2>
          <a href="https://www.python.org/"><img src="/tech_stack_icons/python.png" alt="Python" /></a>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><img src="/tech_stack_icons/csharp.png" alt="C#" /></a>
          <a href="#"><img src="/tech_stack_icons/web.png" alt="Web" /></a>
          <a href="https://cplusplus.com/"><img src="/tech_stack_icons/cplusplus.png" alt="C++" /></a>
        </div>

        <!-- Frameworks -->
        <div class="category">
          <h2>Frameworks</h2>
          <a href="https://monogame.net/"><img src="/tech_stack_icons/monogame.png" alt="MonoGame" /></a>
          <a href="https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet"><img src="/tech_stack_icons/dotnet.png" alt="ASP.NET" /></a>
          <a href="https://vuejs.org/"><img src="/tech_stack_icons/vue.png" alt="Vue" /></a>
          <a href="https://getbootstrap.com/"><img src="/tech_stack_icons/bootstrap.png" alt="Bootstrap" /></a>
        </div>

        <!-- DevOps -->
        <div class="category">
          <h2>DevOps</h2>
          <a href="https://github.com/"><img src="/tech_stack_icons/github.png" alt="GitHub" /></a>
          <a href="https://www.gitkraken.com/"><img src="/tech_stack_icons/gitkraken.png" alt="GitKraken" /></a>
          <a href="https://about.gitlab.com/"><img src="/tech_stack_icons/gitlab.png" alt="GitLab" /></a>
          <a href="https://www.atlassian.com/nl/software/jira"><img src="/tech_stack_icons/jira.png" alt="Jira" /></a>
        </div>

        <!-- AI -->
        <div class="category">
          <h2>AI</h2>
          <a href="https://chatgpt.com/"><img src="/tech_stack_icons/chatgpt.png" alt="ChatGPT" /></a>
          <a href="https://github.com/features/copilot"><img src="/tech_stack_icons/copilot.png" alt="GitHub CoPilot" /></a>
        </div>

        <!-- Miscellaneous -->
        <div class="category">
          <h2>Overig</h2>
          <a href="https://www.jetbrains.com/rider/"><img src="/tech_stack_icons/rider.png" alt="Rider" /></a>
          <a href="https://visualstudio.microsoft.com/"><img src="/tech_stack_icons/vs.png" alt="Visual Studio" /></a>
          <a href="https://code.visualstudio.com/"><img src="/tech_stack_icons/vscode.png" alt="Visual Studio Code" /></a>
          <a href="https://www.figma.com/"><img src="/tech_stack_icons/figma.png" alt="Figma" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 2.5rem;
  font-family: 'Jost', sans-serif;
  text-align: center;
  padding-top: 4rem;
}

.subtitle {
  font-size: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
  text-align: center;
  padding-bottom: 2rem;
}

.tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  text-align: center;
  padding-bottom: 4rem;
}

.category {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  font-family: 'Jost', sans-serif;
}

.category h2 {
  font-size: 1.5rem;
  padding-bottom: 2rem;
}

.tools img {
  width: 75px;
  height: 75px;
  margin: 0 auto 2rem;
  display: block;
}

.tools a {
  display: inline-block;
  transition: transform 0.2s ease-in-out;
}

.tools a:hover,
.tools a:focus {
  transform: scale(1.1);
}

.tools a:active {
  transform: scale(0.98);
}
</style>
