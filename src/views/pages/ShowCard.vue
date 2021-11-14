<template>
  <section v-if="isCalled" class="card">
    <!-- first Name -->
    <h4>
      {{ fname }}&nbsp;<span> {{ cardData.first_name }}</span>
    </h4>

    <!-- Lasr Name -->
    <h4>
      {{ lname }}&nbsp;<span> {{ cardData.last_name }}</span>
    </h4>

    <!-- membership_tier -->
    <h4>
      {{ membership }}&nbsp;<span> {{ cardData.membership_tier }}</span>
    </h4>

    <!-- discription -->
    <h4>
      {{ descp }}&nbsp;
      <p v-if="cardData.description">{{ cardData.description }}</p>
      <span v-else>{{ descp_Nf }}</span>
    </h4>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import data from '@/locale/en';

export default {
  name: 'ShowCard',
  data() {
    return {
      fname: data.Card_FNAM,
      lname: data.Card_LNAM,
      membership: data.Card_MEMB,
      descp: data.Card_DESCP,
      descp_Nf: data.Card_DESCP_NF,
    };
  },
  methods: {
    ...mapActions(['fetchCards']),
  },
  mounted() {
    // fetch cards if not fetched
    !this.isCalled && this.fetchCards();
  },
  computed: {
    ...mapGetters(['allCards', 'isCalled']),
    // get random card
    cardData() {
      return this.allCards[Math.floor(Math.random() * this.allCards.length)];
    },
  },
};
</script>
