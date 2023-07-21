<template>
  <div class="donate-a">
    <div class="flex-box top">
      <h1>Donate Now</h1>
      <select name="pay" id="payment-method">
        <option value="M-pesa">MPESA</option>
        <option value="Pay-Pal">PayPal</option>
      </select>
    </div>
    <div class="grid-mon">
      <button class="currency-button">100 Kshs</button>
      <button class="currency-button">200 Kshs</button>
      <button class="currency-button">500 Kshs</button>
      <button class="currency-button">1000 Kshs</button>
      <button class="currency-button">5000 Kshs</button>
      <button class="currency-button">10000 Kshs</button>
      <div class="custom-amount">
        <div class="input_div">
          <input
            class="custom-input"
            type="text"
            id="custom-amount-input"
            placeholder="  "
            required
            autocomplete="off"
          />
          <label for="custom-amount-input" class="custom-input-label"
            >Amount</label
          >
        </div>
        <button class="currency-button custom-currency">
          <font-awesome-icon icon="fa-solid fa-money-bill-wave" />
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.custom-amount {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 274px;
}
.custom-input-label {
  position: absolute;
  top: 8px;
  font-size: 18px;
  left: 12px;
  cursor: text;
  color: #68b984;
  background-color: white;
  padding: 0 3px;
  transition: all 0.2s ease-in;
}
.input_div {
  position: relative;
}
.custom-input {
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #8bf0ae;
  color: #285430;
  border-radius: 0;
  font-size: 18px;
  padding: 9px;
}
.custom-input:focus {
  border-color: #68b984;
}
.custom-input:focus ~ .custom-input-label,
.custom-input:valid ~ .custom-input-label {
  top: -11px;
  font-size: 13px;
}
.grid-mon {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin: 30px 40px;
  z-index: 2;
  position: relative;
}
.currency-button {
  background: white;
  padding: 10px 0;
  color: #68b984;
  font-size: 18px;
  border: 1px solid #68b984;
  transition: all 0.3s;
}
.currency-button:hover {
  background: #68b984;
  border-color: white;
  color: white;
}
.currency-button:active {
  transform: scale(0.98);
}
#payment-method {
  background: white;
  color: #285430;
  border: 2px solid #285430;
  padding: 0 15px;
  margin-right: 10px;
}
.custom-currency {
  padding-left: 20px;
  padding-right: 20px;
}
@media (max-width: 1150px) {
  .grid-mon {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 820px) {
  .custom-amount {
    grid-column: 1/3;
  }
}
.top {
  justify-content: space-between;
  z-index: 2;
  position: relative;
}
</style>
