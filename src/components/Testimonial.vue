<template>
  <div class="card">
    <div class="profile">
      <img src="../assets/dante.jpg" alt="" class="profile-pic" />
      <div class="prof-det">
        <h3>{{ Testimonial.Name }}</h3>
        <p>{{ Testimonial.Role }}</p>
      </div>
    </div>
    <p class="important-text">
      {{ Testimonial.ShortMessage }}
    </p>

    <p class="profile-text">
      {{ Testimonial.LongMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    Testimonial: Object,
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  padding: 5px 0 0 10px;
}
.important-text {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 20px;
  padding: 10px;
}
.profile-text {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.4;
  opacity: 70%;
  padding: 10px;
}
.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #996ed9;
  margin-right: 10px;
}
</style>
