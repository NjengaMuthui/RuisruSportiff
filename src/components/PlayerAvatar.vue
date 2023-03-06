<template>
  <div class="player-avatar ruiru-bar card-default">
    <div class="banner"></div>
    <span class="banner-label">Academy Player</span>
    <img src="../assets/nzuka.png" alt="player name" />
    <div class="player-flex">
      <div>
        <p class="name first">{{ Player.FirstName }}</p>
        <p class="name">{{ Player.LastName }}</p>
      </div>
      <div class="kit-number">
        <span>44</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { Player: Object },
};
</script>

<style scoped>
.kit-number {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}
.kit-number span {
  opacity: 0.3;
}
.name {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 10px;
}
.first {
  font-size: 1.5rem;
}
.player-avatar img {
  height: 200px;
  width: 200px;
}
.player-avatar {
  position: relative;
}
.player-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.banner {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-top: 80px solid yellow;
  border-right: 80px solid transparent;
}
.banner-label {
  position: absolute;
  font-size: 11px;
  top: 13px;
  left: 0;
  z-index: 2;
  width: 50px;
  transform: rotate(-45deg);
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}
.player-avatar {
  max-width: 200px;
}
</style>
