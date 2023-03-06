<template>
  <div class="donate-b">
    <div class="m-pesa-pay-pal">
      <img
        v-if="payment_option"
        src="../assets/PayPal_Logo_2014.svg"
        alt="Pay-Pal image"
      />
      <img v-else src="../assets/M-PESA_LOGO.svg" alt="Mpesa-logo" />
    </div>
    <div class="input_div input-h">
      <input
        class="custom-input"
        type="text"
        id="custom-amount-input"
        placeholder="  "
        required
        autocomplete="off"
      />
      <label for="custom-amount-input" class="custom-input-label">{{
        label_name
      }}</label>
    </div>
    <button @click="switchComponent" class="currency-button d-button">
      Pay Here
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      payment_option: false
    };
  },
  computed: {
    label_name() {
      return this.payment_option ? "Email Address" : "Phone Number";
    }
  },
  methods: {
    ...mapMutations(["switchComponent"])
  }
};
</script>

<style scoped>
.m-pesa-pay-pal > img {
  height: 200px;
}
.donate-b {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.input-h {
  height: 50px;
  width: 300px;
}
.input-h > input {
  width: 300px;
}
.d-button {
  min-width: 300px;
}
.input-h,
.d-button {
  z-index: 2;
}
</style>
