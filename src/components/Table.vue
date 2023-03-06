<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>MP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th class="row-medium-large">GF</th>
        <th class="row-medium-large">GA</th>
        <th>GD</th>
        <th>Points</th>
        <th class="row-medium-large">Form</th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        v-for="(row, index) in rows"
        :TeamData="row"
        :key="row.Name"
        :index="index"
      />
    </tbody>
  </table>
</template>
<script>
import TableRow from "./TableRow.vue";
export default {
  components: { TableRow },
  data() {
    return {
      rows: [
        {
          Name: "Ruiru Sportiff",
          MatchesPlayed: 8,
          Won: 5,
          Draw: 2,
          Loss: 1,
          GoalFor: 20,
          GoalAgainst: 11,
          GoalDifference: 9,
          Points: 17
        },
        {
          Name: "Wembley United",
          MatchesPlayed: 8,
          Won: 5,
          Draw: 2,
          Loss: 1,
          GoalFor: 20,
          GoalAgainst: 11,
          GoalDifference: 9,
          Points: 17
        }
      ]
    };
  }
};
</script>
<style scoped>
th {
  padding: 8px 5px;
}
</style>
