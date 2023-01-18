<script setup>
</script>

<template>
  <div id="app">
    <header>
        <nav>
          <router-link to="/base">base</router-link>
          <router-link to="/watch">watch</router-link>
          <router-link to="/cpmputed">cpmputed</router-link>
          <router-link to="/class">class</router-link>
          <router-link to="/condition">condition</router-link>
          <router-link to="/list">list</router-link>
          <router-link to="/event">event</router-link>
          <router-link to="/form">form</router-link>
          <router-link to="/props">props</router-link>
          <router-link to="/model">model</router-link>
          <router-link to="/nextTick">nextTick</router-link>
          <router-link to="/slot">slot</router-link>
          <router-link to="/dy">dy</router-link>
          <router-link to="/mixin">mixin</router-link>
        </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
