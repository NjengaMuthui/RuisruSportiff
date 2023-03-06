<template>
  <Input :label_name="Phone">
    <span class="country-code"> +254 </span>
  </Input>
</template>

<script>
import Input from "../components/RegularInput.vue";
export default {
  components: { Input }
};
</script>

<style scoped>
.country-code {
  font-weight: 600;
}
</style>
