<script>
import MatchDropMenu from "./components/MatchDropMenu.vue";
import { RouterLink, RouterView } from "vue-router";
import TeamDropMenu from "./components/TeamDropMenu.vue";
import Footer from "./components/footer.vue";
import { PlayerStore } from "./store/index";

export default {
  setup() {
    let playerStore = PlayerStore();
    return { playerStore };
  },
  async mounted() {
    console.log("Mounted method executing");
    await this.playerStore.loadPlayers();
  },
  data() {
    return {
      open: false
    };
  },
  components: { MatchDropMenu, TeamDropMenu, Footer }
};
</script>

<template>
  <div
    @click="open = !open"
    class="main_overlay"
    :class="{ overlay_on: open }"
  ></div>
  <nav>
    <img id="logo" src="./assets/sport-bg-blank.png" alt="Team Logo" />
    <div class="container">
      <div class="main">
        <h1 class="club-title">Ruiru Sportiff F.C.</h1>
      </div>
      <ul class="nav-menu" :class="{ show: open, close: !open }">
        <li>
          <RouterLink class="animated-link" to="/">Home</RouterLink>
        </li>
        <li class="drop">
          <RouterLink class="animated-link" to="/team">Team</RouterLink>
          <TeamDropMenu class="team-menu" />
        </li>
        <li class="drop">
          <RouterLink class="animated-link" to="/matches" id="match-drop"
            >Matches</RouterLink
          >
          <MatchDropMenu class="match-menu" />
        </li>
        <li>
          <RouterLink class="animated-link" to="/donate">Donate</RouterLink>
        </li>
        <li>
          <RouterLink class="animated-link" to="/aboutus">About us</RouterLink>
        </li>
      </ul>
      <ul class="social">
        <li>
          <a
            href="https://www.facebook.com/sportiff.ruirusportifffc.7"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
      <button @click="open = !open" class="close-open">
        <div id="top" class="line top" :class="{ top_rotate: open }"></div>
        <div
          id="bottom"
          class="line bottom"
          :class="{ bottom_rotate: open }"
        ></div>
      </button>
    </div>
  </nav>
  <div class="body-footer">
    <div class="wrapper">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.main_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.overlay_on {
  z-index: 6;
}
.line {
  position: absolute;
  width: 20px;
  left: 5px;
  height: 3px;
  background-color: black;
  transition: transform 0.3s linear;
}
.top {
  top: 10px;
}
.bottom {
  top: auto;
  bottom: 10px;
}
.top_rotate {
  height: 2px;
  transform: rotate(-45deg) translateY(5.5px);
}
.bottom_rotate {
  height: 2px;
  transform: rotate(45deg) translateY(-5.5px);
}
.team-menu,
.match-menu {
  display: none;
}
.close-open {
  outline: none;
  border: none;
  background: none;
  display: none;
  width: 30px;
  height: 30px;
  position: relative;
  padding: 0;
}
.body-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
}
nav {
  background-color: #ffffff;
  padding: 10px 0px;
  position: fixed;
  width: 100%;
  z-index: 7;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.container {
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
}
#logo {
  position: absolute;
  left: 4px;
  top: 4px;
  max-width: 130px;
  max-height: 130px;
}
nav ul {
  list-style: none;
}
.club-title {
  margin-left: 10px;
  text-transform: uppercase;
  font-size: 120%;
  letter-spacing: 0.2rem;
  color: black;
}

nav li a {
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 24px 0px;
  transition: color 0.3s ease;
  position: relative;
}
.social {
  font-size: 20px;
  display: flex;
}
nav li {
  color: black;
  font-weight: bold;
  text-decoration: none;
  padding: 0 10px;
  transition: color 0.3s ease;
  position: relative;
}
.wrapper {
  padding-top: 90px;
  width: 80%;
  margin: 0 auto 60px auto;
}
.main {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin: 0.2rem 0;
}
@media (min-width: 1150px) {
  .animated-link {
    position: relative;
  }
  .animated-link::after {
    content: "";
    position: absolute;
    bottom: 20px;
    left: 0;
    height: 2px;
    background-color: black;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: right center;
  }
  .animated-link:hover::after {
    transform: scaleX(1);
    transform-origin: left center;
    transition-duration: 0.4s;
  }
  .drop:hover .team-menu,
  .drop:hover .match-menu {
    visibility: visible;
    top: 30px;
  }
  .match-menu,
  .team-menu {
    position: absolute;
    top: 80px;
    background-color: #ffffff;
    visibility: hidden;
    display: flex;
    flex-direction: row;
    padding: 35px 20px 10px 20px;
    transition: top 0.6s ease;
    font-family: "Archivo Narrow", sans-serif;
  }
  .team-menu {
    left: -290px;
  }
}
@media (max-width: 1300px) {
  .social {
    display: none;
  }
}
@media (min-width: 1150px) {
  .nav-menu {
    display: flex;
  }
}
@media (max-width: 1150px) {
  #logo {
    left: 0px;
    top: 0px;
    max-width: 60px;
    max-height: 60px;
  }
  .club-title {
    font-size: 90%;
  }
  .close-open {
    display: block;
  }
  .container {
    position: relative;
  }
  .nav-menu {
    position: absolute;
    right: 0;
    flex-direction: column;
    top: 40px;
    background-color: #ffffff;
    padding: 0;
    z-index: 7;
  }
  .nav-menu li {
    border-top: 1px solid black;
    padding: 10px 20px;
    animation: navAnimation 0.4s ease forwards;
    transform: rotateX(90deg);
    opacity: 0;
    transform-origin: top;
    z-index: 7;
  }
  .nav-menu li:nth-child(1) {
    border-top: none;
  }
  .nav-menu li:nth-child(2) {
    animation-delay: 0.1s;
  }
  .nav-menu li:nth-child(3) {
    animation-delay: 0.2s;
  }
  .nav-menu li:nth-child(4) {
    animation-delay: 0.3s;
  }
  .nav-menu li:nth-child(5) {
    animation-delay: 0.4s;
  }
  .nav-menu a {
    padding: 5px 20px;
  }
  @keyframes navAnimation {
    to {
      transform: rotateX(0);
      opacity: 1;
    }
  }
}
</style>
