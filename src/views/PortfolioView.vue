<script setup lang="ts">
import PortfolioCard from '../components/PortfolioCard.vue'
import { portfolioData } from '../data/portfolioData.js'
</script>

<template>
  <section class="portfolio" id="portfolio">
    <div class="sectionTitle">
      <h1>My portfolio</h1>
      <p>
        A selection of personal and professional projects I have worked on by myself or in teams in
        the last years.
      </p>
    </div>
    <ul class="portfolio-list">
      <li v-for="project in portfolioData" :key="project.title" class="project">
        <PortfolioCard
          :title="project.title"
          :description="project.description"
          :year="project.year"
          :stack="project.stack"
        >
          <template v-slot:thumbnail>
            <div class="thumbnail">
              <img
                v-for="(thumbnail, index) in project.thumbnails"
                :key="`${project.title}-${index}`"
                :src="thumbnail.src"
                :height="thumbnail.height"
                :width="thumbnail.width"
              />
            </div>
          </template>
        </PortfolioCard>
      </li>
    </ul>
  </section>
</template>

<style>
.portfolio {
  position: relative;
  min-height: 140vh;
  display: flex;
  flex-direction: column;
  scroll-margin-top: 100px;
  max-width: 100%;
  padding: 2rem;
  padding-bottom: 8rem;
  border-top: 2px solid var(--color-border);
  background-color: var(--theme-orange);
}

.thumbnail {
  display: flex;
  flex-direction: row;
}

.sectionTitle {
  font-size: 1.5rem;
  text-align: center;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.portfolio-list {
  display: flex;
  gap: 5rem;
  list-style: none;
  overflow: scroll;
}
</style>
