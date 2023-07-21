import { defineStore } from "pinia";
import axios from "axios";

export const PlayerStore = defineStore("PlayerStore", {
  state: () => {
    return {
      players: []
    };
  },
  getters: {
    getPosition(state) {
      return (position) => state.players.filter((p) => p.position == position);
    }
  },
  actions: {
    async loadPlayers() {
      const res = await axios.get(
        "https://ruirusportiffacademy.com/api/players/all"
      );
      res.data.data.forEach((element) => {
        element["isAcademy"] = true;
      });
      this.players = res.data.data;
    }
  }
});
