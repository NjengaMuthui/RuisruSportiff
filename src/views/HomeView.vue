<script>
import TestimonialCard from "../components/Testimonial.vue";
export default {
  components: {
    TestimonialCard,
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!",
        },
        {
          Name: "Alex Mbua 2",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!",
        },
        {
          Name: "Alex Mbua 3",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!",
        },
        {
          Name: "Alex Mbua 4",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!",
        },
        {
          Name: "Alex Mbua 4",
          Role: "Team Captain",
          ShortMessage:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad optullam aperiam sint asperiores sequi explicabo delectus.",
          LongMessage:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animiexercitationem aliquam voluptatum culpa reiciendis nam accusantium, numquam error ex qui quos doloremque, laboriosam enim assumendaincidunt! Repellat quae praesentium autem! Lorem ipsum dolor sitamet consectetur adipisicing elit. Inventore minus iste blanditiisillum, accusantium ad reiciendis quis excepturi cumque vel ratione?Fugit ut magnam tempore quod aspernatur rerum ad quia!",
        },
      ],
    };
  },
};
</script>
<template>
  <main>
    <header>
      <div class="head">
        <div class="img-holder">
          <div class="pic-overlay">
            <img src="../assets/team.jpg" alt="Team picture" />
            <h1 class="overlay">Main Team Squad</h1>
          </div>
          <div class="pic-overlay">
            <img src="../assets/team2.jpg" alt="Team picture" />
            <h1 class="overlay">Main Team Squad</h1>
          </div>
          <div class="pic-overlay">
            <img src="../assets/team3.jpg" alt="Team picture" />
            <h1 class="overlay">Juniour Squad</h1>
          </div>
        </div>
      </div>
      <div class="avatarpic ruiru-bar">
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
    </header>
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
  </main>
</template>

<style scoped>
.grid-box {
  display: grid;
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
.about-h,
.about-p {
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
  display: flex;
  animation: slide 10s linear 1s infinite alternate;
}
.pic-overlay {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 30px;
  left: 10px;
  color: white;
}
.head,
.img-holder img {
  width: 600px;
  height: 400px;
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
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  35% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(-600px);
  }
  75% {
    transform: translateX(-600px);
  }
  85% {
    transform: translateX(-1200px);
  }
  100% {
    transform: translateX(-1200px);
  }
}
</style>
