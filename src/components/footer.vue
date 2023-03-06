<template>
  <div class="footer">
    <div class="column">
      <h2>Contact us</h2>
      <ul>
        <li>
          <a href="#"
            ><font-awesome-icon class="icon" icon="fa-brands fa-whatsapp"
          /></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/sportiff.ruirusportifffc.7"
            target="_blank"
          >
            <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#"
            ><font-awesome-icon class="icon" icon="fa-solid fa-envelope"
          /></a>
        </li>
      </ul>
    </div>
    <div class="column">
      <h2>Our Location</h2>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0188878699432!2d36.95040561439351!3d-1.146988899163371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f39cec52443f9%3A0xe2a22bdf2ee740b2!2sRuiru%20Sportiff%20FC%20Home%20Ground!5e0!3m2!1sen!2ske!4v1668591683498!5m2!1sen!2ske"
          width="400"
          height="200"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #003366;
  color: white;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
}
li {
  padding: 5px;
}
.icon {
  font-size: 25px;
  color: white;
}
@media (max-width: 820px) {
  .footer {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
