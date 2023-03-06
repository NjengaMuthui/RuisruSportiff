<template>
  <div class="card-default don">
    <font-awesome-icon class="icon" icon="fa-solid fa-coins" />

    <Transition
      mode="out-in"
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutLeft"
    >
      <KeepAlive>
        <component :is="activeComponent"> </component>
      </KeepAlive>
    </Transition>
  </div>
</template>

<script>
import DonateSelect from "./DonateSelect.vue";
import DonateEnter from "./DonateEnter.vue";
import store from "../store";
export default {
  components: { DonateSelect, DonateEnter },
  computed: {
    activeComponent() {
      return store.state.donate_component;
    }
  }
};
</script>

<style scoped>
.don {
  padding: 30px 10px 100px 10px;
  position: relative;
  overflow: hidden;
}
.icon {
  position: absolute;
  font-size: 300px;
  opacity: 0.1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 1;
  color: gray;
}
h1 {
  text-align: center;
}
</style>
