<template>
  <section class="layout">
    <!-- nav bar -->
    <NavBar />

    <!-- page to be render -->
    <div class="layout__view">
      <router-view />
    </div>

    <!-- footer -->
    <Footer />
  </section>
</template>

<script>
import { NavBar, Footer } from '@/components';
export default {
  name: 'LayOut',
  components: {
    NavBar,
    Footer,
  },
};
</script>
