<template>
  <section class="cardRoot">
    <h3 class="cardRoot__heading">{{ cardhead }}</h3>

    <!-- form -->
    <form class="cardRoot__formElements" @submit="handleSubmit">
      <!-- text fields -->
      <input
        class="cardRoot__formElements__textF"
        type="text"
        name="firstname"
        required
        :placeholder="fname_plac_txt"
        v-model="firstname"
      />
      <input
        class="cardRoot__formElements__textF"
        type="text"
        name="lastname"
        required
        :placeholder="lname_plac_txt"
        v-model="lastname"
      />

      <!-- options box -->
      <div class="cardRoot__formElements__options">
        <label for="tier">{{ membershipLab }}</label>
        <select name="tier" required v-model="tier">
          <option value="Silver">{{ membershipLab_opt1 }}</option>
          <option value="Gold">{{ membershipLab_opt2 }}</option>
          <option value="Platinum">{{ membershipLab_opt3 }}</option>
        </select>
      </div>

      <textarea
        class="cardRoot__formElements__descp"
        name="descp"
        rows="4"
        placeholder="Enter user description"
        v-model="descp"
      />

      <div class="cardRoot__formElements__buttCont">
        <button type="submit">{{ btn_txt }}</button>
      </div>
    </form>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';
import data from '@/locale/en';

export default {
  name: 'NewCard',
  components: {},
  data() {
    return {
      firstname: '',
      lastname: '',
      tier: '',
      descp: '',

      // locale
      cardhead: data.NEWCARD_HEADING,

      fname_plac_txt: data.NEWCARD_FNAM_TXT,
      lname_plac_txt: data.NEWCARD_LNAM_TXT,

      membershipLab: data.NEWCARD_MEMBERSHIP_LAB,
      membershipLab_opt1: data.NEWCARD_MEMBERSHIP_OPT1,
      membershipLab_opt2: data.NEWCARD_MEMBERSHIP_OPT2,
      membershipLab_opt3: data.NEWCARD_MEMBERSHIP_OPT3,

      btn_txt: data.NEWCARD_BUTT_TXT,
    };
  },
  methods: {
    ...mapActions(['addCard']),
    handleSubmit(e) {
      e.preventDefault();

      // new Card
      const newCard = {
        card_number: uuidv4(),
        first_name: this.firstname,
        last_name: this.lastname,
        membership_tier: this.tier,
        description: this.descp,
      };

      // add new card
      this.addCard(newCard);

      // redirect to home
      this.$router.push('/');
    },
  },
};
</script>
