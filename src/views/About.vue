<template>
  <div class="about-wrapper">

    <div class="about" id="about">
      <h1>About</h1>
      <p>
        <h4 class="bold">From business to tech</h4>
        I have an extensive background in business
        development and project management in the automotive industry. In recent years, I found joy in
        creating digital experiences and started to transition into tech. As a generalist, I enjoy
        working across the full stack, though my current daily work is front end heavy.
        <br />
        <br />
        Currently based in Stockholm, I work for Mevisio AB. We are a small team of full stack
        engineers developing and maintaining a cloud-based web application for data visualisation and
        collaboration. As we own the full product lifecycle and architechture, I benefit from exposure
        to every aspect of keeping the code alive: from feature planning to implementation as well as
        deployment and DevOps.
      </p>
      <h4 class="bold">Never not a project manager</h4>
      <p>
        Developing software is so much more than writing code. A considerable amount of work goes into
        setup, planning and structure. Keeping track of dozens, hundreds, thousands of files? Staying
        organised is key. Years of managing projects help me today to write clean code and keep my repository well structured.
      </p>
    </div>
  </div>
</template>

<style>
.about-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10vh;

  --dot-size: 2px;
  --dot-spacing: 140px;
  --dot-color: var(--theme-blue-50);

background-image:
    radial-gradient(var(--dot-color) var(--dot-size), var(--color-background-soft) var(--dot-size)),
    radial-gradient(var(--dot-color) var(--dot-size), transparent var(--dot-size));
  background-size: var(--dot-spacing) var(--dot-spacing);
  background-position:
    0 0,
    calc(var(--dot-spacing) / 2) calc(var(--dot-spacing) / 2);

}

.about {
  font-size: 1.5rem;
  min-height: 120vh;
  width: 65%;
  padding: 3rem;
  scroll-margin-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  
}

.bold {
  font-weight: 600;
}
</style>
