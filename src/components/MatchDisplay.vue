<template>
  <div class="comp">
    <h4 id="fixture_date_1">{{ Game.Date }}</h4>
    <h4 class="league-name">{{ Game.League }}</h4>
    <div class="team_score_box">
      <h5 v-if="Game.isPlayed" class="team_score">{{ Game.HomeScore }}</h5>
      <font-awesome-icon v-else icon="fa-solid fa-shield" />
      <h5 class="team_name">{{ Game.Home }}</h5>
    </div>
    <div class="team_score_box">
      <h5 v-if="Game.isPlayed" class="team_score">{{ Game.AwayScore }}</h5>
      <font-awesome-icon v-else icon="fa-solid fa-shield" />
      <h5 class="team_name">{{ Game.Away }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Game: Object,
  },
};
</script>

<style scoped>
#fixture_date_1 {
  color: #808080;
}

hr {
  color: #b2b2b2;
}
.comp {
  line-height: 1;
}
.team_score_box {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
  align-items: center;
}
.league-name {
  color: #808080;
  margin: 0 0 10px 0;
}
h4 {
  width: max-content;
  color: black;
}
</style>
