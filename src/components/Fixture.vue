<template>
  <div class="fixture_div ruiru-bar card-default">
    <div class="fixture_specs">
      <h3 class="day">Thur Nov 13 - 15:00</h3>
      <h3 class="venue">La Casa Stadium</h3>
      <h3 class="league">Regional League</h3>
    </div>
    <hr class="sep" />
    <div class="outer_result">
      <div class="team_event flex-col">
        <img src="../assets/sport.jpg" alt="Team 1" />
        <p>{{ Game.Home }}</p>
      </div>
      <div class="">
        <span class="V">V</span>
        <span class="S">s</span>
      </div>

      <div class="team_event flex-col">
        <img src="../assets/sport.jpg" alt="Team 2" />
        <p>{{ Game.Away }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Game: {
        Home: "Ruiru Sportiff",
        Away: "Wembley United",
      },
    };
  },
};
</script>

<style scoped>
.fixture_div {
  max-width: 600px;
  margin: 0 0 10px 0;
}
.fixture_specs {
  line-height: 1;
  margin: 10px 0 20px 20px;
}
.fixture_specs .day {
  font-size: 0.9rem;
  font-weight: 800;
}
.fixture_specs .venue {
  font-size: 0.8rem;
  font-weight: 500;
}
.fixture_specs .league {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(90, 89, 89);
}
.V {
  font-size: 30px;
}
.S {
  font-size: 20px;
}
.flex-col {
  flex-direction: column;
}
.team_event {
  display: flex;
  align-items: center;
}
.team_event img {
  width: 80px;
  height: 80px;
}
.outer_result h1 {
  color: grey;
  font-size: 3rem;
}
.outer_result {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sep {
  margin-top: 10px;
}
</style>
