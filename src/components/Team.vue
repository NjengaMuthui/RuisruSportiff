<template>
  <div>
    <PlayerSection :position="g" :Players="GoalKeepers" />
    <PlayerSection :position="d" :Players="Defenders" />
    <PlayerSection :position="m" :Players="Midfielders" />
    <PlayerSection :position="f" :Players="Forwards" />
  </div>
</template>

<script>
import PlayerSection from "./PlayerSections.vue";

export default {
  components: { PlayerSection },
  data() {
    return {
      g: "GoalKeepers",
      d: "Defenders",
      m: "Midfielders",
      f: "Forwards",
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
