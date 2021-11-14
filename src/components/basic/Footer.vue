<template>
  <div class="footerRoot">
    {{ footerTxt }}&nbsp;<a
      class="footerRoot__link"
      href="https://www.linkedin.com/in/maaz-ahmed-khan-516569188/"
      >{{ footerLinkTxt }}</a
    >
  </div>
</template>

<script>
import data from '@/locale/en';
export default {
  name: 'Footer',
  data() {
    return {
      footerTxt: data.FOOTER_TXT,
      footerLinkTxt: data.FOOTER_LINK_TXT,
    };
  },
};
</script>
