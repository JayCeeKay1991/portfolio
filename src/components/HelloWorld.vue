<template>
  <header id="home">
    <img alt="Hero Image" class="hero" src="@/assets/hero.png" width="355" height="355" />
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Hi! I'm Jay.</h1>
        <h3>I make software and manage projects.</h3>
        <div class="buttons">
          <a class="button1" href="#about">Learn more</a>
          <a class="button2" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  padding-right: calc(var(--section-gap) / 2);
  width: 65%;
  height: 90vh;
  scroll-margin-top: 120px;
}

.hero {
  margin: 0 5rem 0 0;
}

header .wrapper {
  display: flex;
}
h1 {
  font-size: 3.6rem;
}

h3 {
  font-size: 2rem;
}

.button1,
.button2 {
  font-size: 1.2rem;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--theme-blue);
}

.button1 {
  color: var(--color-background);
  background: var(--theme-blue-50);
}

.button2 {
  color: var(--theme-blue);
  background: transparent;
}

.buttons {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}
</style>
