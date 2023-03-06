<template>
  <div class="aqua">
    <div class="menu-block">
      <h1 class="menu-title">Goalkeepers</h1>
      <ul>
        <li v-for="(goalkeeper, index) in GoalKeepers" :key="index">
          {{ goalkeeper.FirstName + " " + goalkeeper.LastName + index }}
        </li>
      </ul>
    </div>

    <div class="menu-block">
      <h1 class="menu-title">Defenders</h1>
      <ul>
        <li v-for="(defender, index) in Defenders" :key="index">
          {{ defender.FirstName + " " + defender.LastName }}
        </li>
      </ul>
    </div>
    <div class="menu-block">
      <h1 class="menu-title">Midfielders</h1>
      <ul>
        <li v-for="(midfielder, index) in Midfielders" :key="index">
          {{ midfielder.FirstName + " " + midfielder.LastName }}
        </li>
      </ul>
    </div>
    <div class="menu-block">
      <h1 class="menu-title">Forwards</h1>
      <ul>
        <li v-for="(forward, index) in Forwards" :key="index">
          {{ forward.FirstName + " " + forward.LastName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GoalKeepers: [
        {
          Id: 0,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 1,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 2,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 3,
          FirstName: "Alex",
          LastName: "Mbua",
        },
      ],
      Defenders: [
        {
          Id: 0,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 1,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 2,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 3,
          FirstName: "Alex",
          LastName: "Mbua",
        },
      ],
      Midfielders: [
        {
          Id: 0,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 1,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 2,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 3,
          FirstName: "Alex",
          LastName: "Mbua",
        },
      ],
      Forwards: [
        {
          Id: 0,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 1,
          FirstName: "Alex",
          LastName: "Mbua",
        },
        {
          Id: 2,
          FirstName: "Alex",
          LastName: "Mbua",
        },
      ],
    };
  },
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
