<template>
  <section class="wrapper flex-col card-default create-space">
    <h1>{{ position }}</h1>
    <div class="player-flex">
      <PlayerAvatar
        v-for="(Player, index) in Players"
        :Player="Player"
        :key="Player.Id"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import PlayerAvatar from "./PlayerAvatar.vue";
export default {
  props: { position: String, Players: Array },
  components: { PlayerAvatar }
};
</script>

<style scoped>
.create-space {
  padding: 30px 20px;
  margin: 0 0 30px 0;
}
.player-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
h1 {
  font-size: 30px;
  text-align: left;
  margin-bottom: 30px;
}
</style>
