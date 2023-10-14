<template>
  <div class="column-container-offer">
    <div class="column-offer">
      <h2 style="margin-bottom: 10px">Dentist Basic 255 €</h2>
      <h3 style="color: #ff5c47; margin-top: 0">ušetríte 15%</h3>
      <div>
        <router-link to="/contact">
          <button class="contact-button">OBJEDNAŤ</button>
        </router-link>
      </div>
      <div>
        <p>
          Súbor 3 písomných Informovaných súhlasov a Poučení pacienta pre
          <strong>najčastejšie ošetrenia:</strong>
        </p>
      </div>
      <div>
        <ul class="offer-list">
          <li>
            vstupné vyšetrenie, periodické vyšetrenie a zhotovenie výplne.
          </li>
          <li>endodontické, reendodontické ošetrenie</li>
          <li>extrakcia zuba</li>
        </ul>
      </div>
    </div>
    <div class="column-offer">
      <h2 style="margin-bottom: 10px">Dentist Premium 400 €</h2>
      <h3 style="color: #ff5c47; margin-top: 0">ušetríte 20%</h3>
      <div>
        <router-link to="/contact">
          <button class="contact-button">OBJEDNAŤ</button>
        </router-link>
      </div>
      <div>
        <p>
          Súbor 5 písomných Informovaných súhlasov a Poučení pacienta pre
          <strong>najnáročnejšie ošetrenia:</strong>
        </p>
      </div>
      <div>
        <ul class="offer-list">
          <li>zavedenie zubného implantátu</li>
          <li>augmentácia kosti, sinus lift</li>
          <li>autotransplantácia</li>
          <li>resekcia koreňového hrotu, periapikálna kyretáž</li>
          <li>plastika mäkkých tkanív, operácia parodontu</li>
        </ul>
      </div>
    </div>
    <div class="column-offer">
      <h2 style="margin-bottom: 10px">Dentist Gold 975 €</h2>
      <h3 style="color: #ff5c47; margin-top: 0">ušetríte až 25%</h3>
      <div>
        <router-link to="/contact">
          <button class="contact-button">OBJEDNAŤ</button>
        </router-link>
      </div>
      <div>
        <p>
          <strong
            >Komplexný súbor 13 písomných Informovaných súhlasov a Poučení
            pacienta:</strong
          >
        </p>
      </div>
      <div>
        <ul class="offer-list">
          <li>
            vstupné vyšetrenie, preventívne vyšetrenie a zhotovenie výplne
          </li>
          <li>sedácia pri vedomí</li>
          <li>použitie injekčnej anestézie</li>
          <li>endodontické a reendodontické ošetrenie</li>
          <li>
            extrakcia zuba, chirurgická extrakcia, chirurgická revízia,
            cystektómia
          </li>
          <li>zavedenie zubného implantátu</li>
          <li>augmentácia kosti, sinus lift</li>
          <li>autotransplantácia</li>
          <li>resekcia koreňového hrotu, periapikálna kyretáž</li>
          <li>
            chirurgická príprava pre ortodontické stiahnutie zuba / patefakcia,
            kortikotómia
          </li>
          <li>plastika mäkkých tkanív, operácia parodontu</li>
          <li>protetické ošetrenie</li>
          <li>entonox</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-button {
  background-color: #acacac;
  border: black;
  border-radius: 20px;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
}

.column-container-offer {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.column-offer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background-color: #c5c5c5;
  margin: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
}

.offer-list {
  margin: 0;
  padding: 0;
  text-align: left;
}

.offer-list li {
  position: relative;
  padding-left: 50px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1;
  list-style: none;
  word-wrap: break-word;
  max-width: 60%;
}

.offer-list li:before {
  content: "";
  position: absolute;
  left: 20px;
  top: 6px;
  width: 6px;
  height: 6px;
  background-color: #ff5c47;
  border-radius: 50%;
}

@media (max-width: 1080px) {
  .column-offer {
    width: 100%;
    height: auto;
  }

  .offer-list li {
    padding-left: 30px;
    margin-bottom: 5px;
  }

  .column-container-offer {
    flex-direction: column;
  }
}
</style>
