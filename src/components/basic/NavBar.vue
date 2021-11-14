<template>
  <nav class="NavRoot">
    <router-link to="/">{{ home }}</router-link> |
    <router-link to="/newcard">{{ newCard }}</router-link>
  </nav>
</template>

<script>
import data from '@/locale/en';
export default {
  name: 'NavBar',
  data() {
    return {
      home: data.NAV_ITEM_HOME,
      newCard: data.NAV_ITEM_NewCard,
    };
  },
};
</script>
