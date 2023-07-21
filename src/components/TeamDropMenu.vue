<template>
  <div class="aqua">
    <div class="menu-block">
      <h1 class="menu-title">Goalkeepers</h1>
      <ul>
        <li v-for="(goalkeeper, index) in goalKeepers" :key="index">
          {{ goalkeeper.first_name + " " + goalkeeper.last_name + index }}
        </li>
      </ul>
    </div>

    <div class="menu-block">
      <h1 class="menu-title">Defenders</h1>
      <ul>
        <li v-for="(defender, index) in defenders" :key="index">
          {{ defender.first_name + " " + defender.last_name }}
        </li>
      </ul>
    </div>
    <div class="menu-block">
      <h1 class="menu-title">Midfielders</h1>
      <ul>
        <li v-for="(midfielder, index) in midfield" :key="index">
          {{ midfielder.first_name + " " + midfielder.last_name }}
        </li>
      </ul>
    </div>
    <div class="menu-block">
      <h1 class="menu-title">Forwards</h1>
      <ul>
        <li v-for="(forward, index) in forwards" :key="index">
          {{ forward.first_name + " " + forward.last_name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { PlayerStore } from "../store";

export default {
  setup() {
    let playerStore = PlayerStore();
    return { playerStore };
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

<style scoped>
.menu-block {
  border-left: #808080 solid 1px;
  padding-left: 10px;
  margin: 0px 30px 0px 0px;
  list-style-type: none;
}
.menu-block li {
  white-space: nowrap;
}
</style>
