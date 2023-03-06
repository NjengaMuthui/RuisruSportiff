<template>
  <tr>
    <td>
      <div class="cell-name">
        <img
          src="../assets/sport-bg-blank.png"
          alt="team logo"
          style="width: 20px; height: 20px"
        />
        <p>{{ TeamData.Name }}</p>
      </div>
    </td>
    <td>{{ TeamData.MatchesPlayed }}</td>
    <td>{{ TeamData.Won }}</td>
    <td>{{ TeamData.Draw }}</td>
    <td>{{ TeamData.Loss }}</td>
    <td class="row-medium-large">{{ TeamData.GoalFor }}</td>
    <td class="row-medium-large">{{ TeamData.GoalAgainst }}</td>
    <td>{{ TeamData.GoalDifference }}</td>
    <td>{{ TeamData.Points }}</td>
    <td class="row-medium-large">
      <div class="form-icons">
        <Form v-for="(form, index) in forms" :result="form" :key="index" />
      </div>
    </td>
  </tr>
</template>
<script>
import Form from "./form.vue";
export default {
  components: {
    Form
  },
  props: {
    TeamData: Object
  },
  computed: {
    forms() {
      var randoms = [];
      for (let index = 0; index < 5; index++) {
        randoms.push(Math.floor(Math.random() * 3) + 1);
      }
      return randoms;
    }
  }
};
</script>
<style scoped>
tr {
  border-bottom: 1px solid black;
}
.cell-name {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}
</style>
