<template>
  <div>
    <PlayerSection :position="g" :Players="goalKeepers" />
    <PlayerSection :position="d" :Players="defenders" />
    <PlayerSection :position="m" :Players="midfield" />
    <PlayerSection :position="f" :Players="forwards" />
    <PlayerSection position="Manager" :Players="manager" />
  </div>
</template>

<script>
import PlayerSection from "./PlayerSections.vue";
import { PlayerStore } from "../store";

export default {
  setup() {
    let playerStore = PlayerStore();
    return { playerStore };
  },
  components: { PlayerSection },
  data() {
    return {
      g: "GoalKeepers",
      d: "Defenders",
      m: "Midfielders",
      f: "Forwards",
      manager: [
        {
          first_name: "Alex",
          last_name: "Kimani",
          isAcademy: false,
          number: "",
          img: "manager.jpg"
        }
      ]
    };
  },
  computed: {
    forwards() {
      return this.playerStore.getPosition("FORWARD");
    },
    midfield() {
      return this.playerStore.getPosition("MIDFIELDER");
    },
    defenders() {
      return this.playerStore.getPosition("DEFENDER");
    },
    goalKeepers() {
      return this.playerStore.getPosition("GK");
    }
  }
};
</script>
