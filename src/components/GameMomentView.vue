<template>
  <div class="moment home">
    <p>{{ GameMoment.Time }}'</p>
    <font-awesome-icon icon="fa-solid fa-futbol" />
    <p>{{ GameMoment.Player }}</p>
  </div>
</template>

<script>
export default {
  props: { GameMoment: Object },
};
</script>
