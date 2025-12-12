<script setup>
const email = import.meta.env.VITE_EMAIL
const githubUrl = import.meta.env.VITE_GITHUB
const linkedinUrl = import.meta.env.VITE_LINKEDIN
</script>

<template>
  <section class="contact" id="contact">
    <div class="section-inner">
      <h1>Reach out</h1>
      <p>
        If you want to talk to me about tech (or running, or drawing, or cats, I'm just as excited
        about any of these topics),
        <a :href="`mailto:${email}?subject=Hello`">email me</a> or connect with me on
        <a :href="linkedinUrl">LinkedIn</a>. You can learn more about my projects on my
        <a :href="githubUrl">Github</a>.
      </p>
    </div>
  </section>
</template>

<style>
.contact {
  --dot-size: 30px;
  --dot-spacing: 300px;
  --dot-color: var(--theme-purple-30);

  width: 100%;
  height: 70vh;
  scroll-margin-top: 100px;
  background-image:
    radial-gradient(var(--dot-color) var(--dot-size), transparent var(--dot-size)),
    radial-gradient(var(--dot-color) var(--dot-size), transparent var(--dot-size));
  background-size: var(--dot-spacing) var(--dot-spacing);
  background-position:
    0 0,
    calc(var(--dot-spacing) / 2) calc(var(--dot-spacing) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact .section-inner {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
  font-size: 1.4rem;
}

.contact a {
  color: var(--theme-blue);
}

@media screen and (max-width: 500px) {
  .contact .section-inner {
    font-size: 16px;
    width: 80%;
  }
}
</style>
