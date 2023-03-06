<template>
  <main>
    <header>
      <div class="img-holder">
        <div class="pic-overlay" :class="{ isShowing: team, notShow: !team }">
          <img src="../assets/team.jpg" alt="Team picture" />
          <h1 class="overlay">Main Team Squad</h1>
        </div>
        <div class="pic-overlay" :class="{ isShowing: team1, notShow: !team1 }">
          <img src="../assets/team2.jpg" alt="Team picture" />
          <h1 class="overlay">Main Team Squad</h1>
        </div>
        <div class="pic-overlay" :class="{ isShowing: team2, notShow: !team2 }">
          <img src="../assets/team3.jpg" alt="Team picture" />
          <h1 class="overlay">Juniour Squad</h1>
        </div>
      </div>
      <!-- <div class="avatarpic ruiru-bar">
        <img src="../assets/kaka-assistant.jpg" alt="alexander kimani" />
        <div class="avatar-block">
          <div class="avatar-info">
            <h3 class="avatar-name">Coach: Alexander Kimani</h3>
            <button class="btn">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <span class="phone-no">07123456789</span>
            </button>
          </div>
          <div class="avatar-info">
            <h3 class="avatar-name">Coach: Alexander Kimani</h3>
            <button class="btn">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <span class="phone-no">07123456789</span>
            </button>
          </div>
        </div>
      </div>
    --></header>
    <section class="video-sec">
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/b0cCKR08wUo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/b0cCKR08wUo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="flex-col">
      <div class="wht-bac ruiru-bar">
        <h2 class="about-h">About</h2>
        <p class="about-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          impedit id harum culpa temporibus porro! Voluptatibus nobis iste
          deserunt voluptatem officiis, quasi velit provident aut reiciendis
          modi, earum dolore eaque! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Earum impedit id harum culpa temporibus porro!
          Voluptatibus nobis iste deserunt voluptatem officiis, quasi velit
          provident aut reiciendis modi, earum dolore eaque! Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Earum impedit id harum culpa
          temporibus porro! Voluptatibus nobis iste deserunt voluptatem
          officiis, quasi velit provident aut reiciendis modi, earum dolore
          eaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          impedit id harum culpa temporibus porro! Voluptatibus nobis iste
          deserunt voluptatem officiis, quasi velit provident aut reiciendis
          modi, earum dolore eaque!
        </p>
      </div>
      <div class="grid-box">
        <TestimonialCard class="card" v-bind:Testimonial="Testimonials[0]" />
        <TestimonialCard v-bind:Testimonial="Testimonials[1]" />
        <TestimonialCard v-bind:Testimonial="Testimonials[2]" />
        <TestimonialCard v-bind:Testimonial="Testimonials[3]" />
        <TestimonialCard v-bind:Testimonial="Testimonials[4]" />
      </div>
    </section>
    <section class="table-result">
      <div class="card-default table-card flex-col ruiru-bar">
        <h2 class="table-title">Regional League Table</h2>
        <FootballTable class="table" />
        <div class="table-info">
          <div class="table-box promotion"></div>
          <h6>This is supposed to display info about the page</h6>
        </div>
        <div class="table-info">
          <div class="table-box relegation"></div>
          <h6>This is supposed to display info about the page</h6>
        </div>
      </div>
      <GameResult :Game="LastResult" class="table-card" />
    </section>
  </main>
</template>
<script>
import TestimonialCard from "./Testimonial.vue";
import FootballTable from "./Table.vue";
import GameResult from "./GameResult.vue";
export default {
  components: {
    TestimonialCard,
    FootballTable,
    GameResult
  },
  data() {
    return {
      Testimonials: [
        {
          Name: "Alex Mbua 1",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!"
        },
        {
          Name: "Alex Mbua 2",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!"
        },
        {
          Name: "Alex Mbua 3",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!"
        },
        {
          Name: "Alex Mbua 4",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!"
        },
        {
          Name: "Alex Mbua 4",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!"
        }
      ],
      LastResult: {
        Home: "Ruiru Sportiff",
        HomeScore: 2,
        AwayScore: 0,
        Away: "Membley United",
        isPlayed: true
      },
      team: false,
      team1: false,
      team2: true
    };
  },
  methods: {
    animateImage() {
      var arr = [this.team, this.team1, this.team2];
      var i = arr.length;
      setInterval(() => {
        if (i == arr.length) {
          i = 0;
          arr[arr.length - 1] = false;
        } else arr[i - 1] = false;

        arr[i] = true;
        i++;
        this.team = arr[0];
        this.team1 = arr[1];
        this.team2 = arr[2];
      }, 30000);
    }
  },
  mounted() {
    this.animateImage();
  }
};
</script>

<style scoped>
.isShowing {
  display: block;
}
.notShow {
  display: none;
}
.video-sec {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.video-wrapper {
  position: relative;
  width: 45%;
  padding-bottom: 25.31%;
}
.video-wrapper iframe {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.flex-col {
  flex-direction: column;
}
.table-result {
  display: flex;
  gap: 30px;
}
.table-title {
  margin: 20px 0 0 20px;
}
.table-card {
  margin-top: 30px;
  padding-bottom: 20px;
  width: 100%;
}
.table {
  margin: 25px 0 25px 20px;
  text-align: left;
  border-collapse: collapse;
}
.table-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: start;
  gap: 20px;
  margin-top: 10px;
  width: fit-content;
  margin-left: 20px;
}
.table-box {
  width: 10px;
  height: 10px;
}
.promotion {
  background-color: green;
}
.relegation {
  background-color: yellow;
}
.grid-box {
  display: grid;
  gap: 10px;
}
.card:nth-of-type(1) {
  grid-column: 1 / 4;
  background-color: #565264;
  color: white;
}
.card:nth-of-type(2) {
  grid-row: 2 / 4;
  background-color: #a6808c;
}
.card:nth-of-type(3) {
  grid-column: 2 / 5;
  background-color: #706677;
  color: white;
}
.card:nth-of-type(4) {
  grid-column: 2 / 4;
  grid-row: 2;
  background-color: #ccb7ae;
}

.card:nth-of-type(5) {
  grid-column: 4;
  grid-row: 1 / 3;
  background-color: #d6cfcb;
}
.about-h {
  margin: 10px 10px 30px 100px;
}
.about-p {
  padding: 0 90px 30px 90px;
  margin: 10px 10px 30px 15px;
}
.head {
  overflow: hidden;
  border: #dcdcdc solid 10px;
  border-radius: 15px;
  margin-bottom: 15px;
  box-shadow: 10px 20px 22px rgba(0, 0, 0, 0.3);
}
.img-holder {
  width: 100%;
  overflow: hidden;
}
.pic-overlay {
  width: 100%;
  position: relative;
  animation: pulse 10s linear 1s infinite alternate;
}
.overlay {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
}
.head,
.img-holder img {
  width: 100%;
}
.avatarpic {
  width: 300px;
  height: 400px;
  margin-left: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 10px 20px 22px rgba(0, 0, 0, 0.3);
}
.avatar-info {
  display: flex;
  margin: 10px 0 5px 10px;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
}
.avatar-block {
  position: absolute;
  bottom: 0;
  width: 300px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
}
.avatar-info h3 {
  font-size: 1rem;
}
.avatar-info i {
  font-size: 1.5rem;
}
.btn {
  width: 35px;
  height: 35px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  position: relative;
}
.phone-no {
  position: absolute;
  color: white;
  left: 50px;
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.btn:focus .phone-no {
  transform: scale(100%);
}
header {
  display: flex;
  justify-content: space-between;
}
@keyframes pulse {
  to {
    transform: scale(1.05);
  }
}
@media (max-width: 1150px) {
  .grid-box {
    display: flex;
    flex-direction: column;
  }
  .about-p {
    margin: 10px;
    padding: 10px;
  }
  .about-h {
    margin: 10px;
  }
  .table-result {
    flex-direction: column;
  }
}
@media (max-width: 820px) {
  .video-sec {
    flex-direction: column;
    gap: 20px;
  }
  .video-wrapper {
    width: 100%;
    padding-bottom: 56.75%;
  }
}
</style>
