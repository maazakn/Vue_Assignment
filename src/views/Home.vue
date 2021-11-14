<template>
  <!-- show loading -->
  <span v-if="isloading">Loading...</span>

  <!-- list of cards -->
  <section v-if="!isloading && !error" class="cardsContainer">
    <div v-for="card in allCards" :key="card.card_number">
      <Card :cardData="card" />
    </div>
  </section>

  <div v-if="error">Error while fetching card</div>
</template>

<script>
import { Card } from '@/components';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Card,
  },
  methods: {
    ...mapActions(['fetchCards']),
  },
  mounted() {
    // fetch cards if not fetched
    !this.isCalled && this.fetchCards();
  },
  computed: mapGetters(['isloading', 'allCards', 'error', 'isCalled']),
};
</script>
