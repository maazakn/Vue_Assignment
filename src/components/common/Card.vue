<template>
  <section class="card">
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

    <router-link to="/showcard">{{ link_txt }}</router-link>
  </section>
</template>

<script>
import data from '@/locale/en';

export default {
  name: 'Card',
  data() {
    return {
      fname: data.Card_FNAM,
      lname: data.Card_LNAM,
      membership: data.Card_MEMB,
      link_txt: data.Card_LINK_TXT,
    };
  },
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
};
</script>
