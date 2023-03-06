<template>
  <div class="blocks">
    <MatchMenuColumn :MatchDispl="Results" />
    <MatchMenuColumn :MatchDispl="Fixtures" />
  </div>
</template>

<script>
import MatchMenuColumn from "./MatchMenuColumn.vue";
export default {
  components: { MatchMenuColumn },
  data() {
    return {
      Results: {
        title: "Results",
        Games: [
          {
            Home: "Ruiru Sportiff",
            HomeScore: 2,
            AwayScore: 0,
            Away: "Membley United",
            isPlayed: true,
            Date: "18th Nov 2022",
            League: "Regional League",
          },
          {
            Home: "Ruiru Sportiff",
            HomeScore: 2,
            AwayScore: 0,
            Away: "Membley United",
            isPlayed: true,
            Date: "18th Nov 2022",
            League: "Regional League",
          },
        ],
      },
      Fixtures: {
        title: "Fixtures",
        Games: [
          {
            Home: "Ruiru Sportiff",
            HomeScore: 2,
            AwayScore: 0,
            Away: "Membley United",
            isPlayed: false,
            Date: "18th Nov 2022",
            League: "Regional League",
          },
          {
            Home: "Ruiru Sportiff",
            HomeScore: 2,
            AwayScore: 0,
            Away: "Membley United",
            isPlayed: false,
            Date: "18th Nov 2022",
            League: "Regional League",
          },
        ],
      },
    };
  },
};
</script>

<style>
.blocks {
  display: flex;
}
</style>
