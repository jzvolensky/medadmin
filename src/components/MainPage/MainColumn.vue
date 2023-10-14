<template>
  <div class="column-container-main">
    <div class="column-main" style="background-color: #8d8d8d">
      <i class="fa-solid fa-envelope-open fa-4x"></i>
      <h2>napíšte nám, zašleme vám ponuku</h2>
    </div>
    <div class="column-main" style="background-color: #8d8d8d">
      <i class="fa-solid fa-list-check fa-4x"></i>
      <h2>
        my spravíme vstupný audit a spracujeme na mieru dokumenty pre vašu
        ambulanciu
      </h2>
    </div>
    <div class="column-main" style="background-color: #8d8d8d">
      <i class="fa-solid fa-suitcase-medical fa-4x"></i>
      <h2>vy sa v kľude venujete pacientom</h2>
    </div>
  </div>

  <div class="sale-info">
    <h1 style="color: #ff5c47">AKCIA Ušetrite až 25%</h1>
    <h2>
      Informované súhlasy pre zubných lekárov - nové cenovo ešte výhodnejšie
      balíky
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.column-container-main {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.column-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 10px;
}

@media (max-width: 1080px) {
  .column-container-main {
    flex-direction: column;
  }
}
</style>
