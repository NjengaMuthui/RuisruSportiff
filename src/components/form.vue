<template>
  <font-awesome-icon
    v-if="result == 1"
    icon="fa-solid fa-circle-check"
    class="win"
  />
  <font-awesome-icon
    v-else-if="result == 2"
    icon="fa-solid fa-circle-xmark"
    class="loss"
  />
  <font-awesome-icon v-else icon="fa-solid fa-circle-minus" class="draw" />
</template>

<script>
export default {
  props: {
    result: Number,
  },
};
</script>
<style scoped>
.win {
  color: green;
}
.draw {
  color: grey;
}
.loss {
  color: red;
}
</style>
