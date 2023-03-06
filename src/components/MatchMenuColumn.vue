<template>
  <div class="menu-block">
    <h1 class="menu-title">{{ MatchDispl.title }}</h1>
    <MatchDisplayView class="score_box" :Game="MatchDispl.Games[0]" />
    <hr class="between-teams" />
    <MatchDisplayView class="score_box" :Game="MatchDispl.Games[1]" />
  </div>
</template>

<script>
import MatchDisplayView from "./MatchDisplay.vue";
export default {
  components: { MatchDisplayView },
  props: { MatchDispl: Object },
};
</script>

<style scoped>
.menu-block {
  border-left: #808080 solid 1px;
  padding-left: 10px;
  margin: 0px 30px 0px 0px;
}
.score_box {
  margin: 15px 5px;
}
</style>
