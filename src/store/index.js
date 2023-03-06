import { createStore } from "vuex";

export default createStore({
  state: {
    donate_component: "DonateEnter",
    Players: [
      {
        Id: 0,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "GoalKeeper"
      },
      {
        Id: 1,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "GoalKeeper"
      },
      {
        Id: 2,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "GoalKeeper"
      },
      {
        Id: 3,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 4,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 5,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 6,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 7,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 8,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Defenders"
      },
      {
        Id: 9,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 10,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 11,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 12,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 13,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 14,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 15,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 16,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 17,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 18,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 19,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 20,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      },
      {
        Id: 21,
        FirstName: "Alex",
        LastName: "Mbua",
        Position: "Midfielders"
      }
    ]
  },
  mutations: {
    switchComponent(state) {
      state.donate_component =
        state.donate_component == "DonateEnter"
          ? "DonateSelect"
          : "DonateEnter";
    }
  }
});
