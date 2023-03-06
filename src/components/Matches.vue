<template>
  <tabs :options="{ useUrlFragment: false }" class="card-default">
    <tab name="Fixtures">
      <Fixture />
      <Fixture />
      <Fixture />
      <Fixture />
      <Fixture />
      <Fixture />
    </tab>
    <tab name="Results">
      <GameResult :Game="LastResult" />
    </tab>
  </tabs>
</template>

<script>
import Fixture from "./Fixture.vue";
import GameResult from "./GameResult.vue";
export default {
  components: {
    Fixture,
    GameResult,
  },
  data() {
    return {
      LastResult: {
        Home: "Ruiru Sportiff",
        HomeScore: 2,
        AwayScore: 0,
        Away: "Membley United",
        isPlayed: true,
      },
    };
  },
};
</script>
<style>
.tabs-component-tabs {
  list-style-type: none;
  display: flex;
  padding-left: 0;
  margin-bottom: 30px;
}
.tabs-component-tab-a {
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  font-weight: 900;
  border-bottom: 2px solid #d3d3d3;
}
.is-active a {
  color: rgb(13, 219, 219);
  border-bottom: 2px solid rgb(13, 219, 219);
}
.tabs-component {
  padding: 10px 0 30px 10px;
}
</style>
