<template>
  <div class="custom-amount">
    <slot> </slot>
    <div class="input_div">
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
  </div>
</template>

<script>
export default {
  props: { label_name: String }
};
</script>

<style scoped>
.custom-amount {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 274px;
  max-width: 274px;
}
.custom-input-label {
  position: absolute;
  top: 8px;
  font-size: 18px;
  left: 12px;
  cursor: text;
  color: #68b984;
  background-color: white;
  padding: 0 3px;
  transition: all 0.2s ease-in;
}
.input_div {
  position: relative;
}
.custom-input {
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #8bf0ae;
  color: #285430;
  border-radius: 0;
  font-size: 18px;
  padding: 9px;
}
.custom-input:focus {
  border-color: #68b984;
}
.custom-input:focus ~ .custom-input-label,
.custom-input:valid ~ .custom-input-label {
  top: -11px;
  font-size: 13px;
}
</style>
