<template>
  <div class="card-default ruiru-bar">
    <h2 class="card-head">Results</h2>
    <h4 class="card-head">{{ Game.League }}</h4>
    <h6 class="card-head">{{ Game.Date }}</h6>
    <div class="result">
      <div class="outer_result">
        <div class="team_event flex-col">
          <img src="../assets/sport.jpg" alt="Team 1" />
          <p>{{ Game.Home }}</p>
        </div>
        <h1>{{ Game.HomeScore }}</h1>
        <h1>-</h1>
        <h1>{{ Game.AwayScore }}</h1>
        <div class="team_event flex-col">
          <img src="../assets/sport.jpg" alt="Team 2" />
          <p>{{ Game.Away }}</p>
        </div>
      </div>
      <GameMomentView :GameMoment="GameMoment" />
      <GameMomentView :GameMoment="GameMoment" />
    </div>
  </div>
</template>

<script>
import GameMomentView from "./GameMomentView.vue";
export default {
  components: { GameMomentView },
  props: {
    Game: Object
  },
  data() {
    return {
      showResult: true,
      GameMoment: {
        Time: 20,
        Player: "Alex Mbua"
      }
    };
  }
};
</script>

<style>
.outer_result {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px;
}
.flex-col {
  flex-direction: column;
}
.team_event {
  display: flex;
}
.team_event img {
  width: 80px;
  height: 80px;
}
.outer_result h1 {
  color: grey;
  font-size: 3rem;
}
.result {
  display: flex;
  flex-direction: column;
  margin: 0 30px;
}
.card-head {
  margin: 5px 0 0 20px;
}
.moment {
  display: flex;
  align-items: center;
  gap: 5px;
}
.home {
  align-self: flex-start;
}
.away {
  align-self: flex-end;
}
</style>
