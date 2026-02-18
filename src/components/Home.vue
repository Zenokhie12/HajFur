<script>
import { ref } from 'vue'

const imgZoom = ref(false);
</script>

<template>
    <div class="app-container">
        <div class="app-section">
          <div class="section-title">Hajar Furniture Features</div>
          <div class="cards">
            <div class="card">
              <div class="card-image">
                <img 
                    style="max-height:100%;"
                    src="/src/assets/Furnitures/Chinaware-Hero.png"
                    :class="{'expand': imgZoom}"
                    @click="imgZoom = !imgZoom"
                >

              </div>
              <div class="card-content">
                <h3>Local Home Cabinets</h3>
                <p>Elevate your living space with custom-crafted local cabinetry designed for lasting quality and timeless style.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img 
                    style="max-height:100%;"
                    src="/src/assets/Furnitures/Mexican-Sala-Set-Hero.png">
              </div>
              <div class="card-content">
                <h3>Local Sala Sets</h3>
                <p>Transform your living space with the vibrant soul of Mexico through our handcrafted, authentic sala sets that blend traditional artistry with modern comfort.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-image">
                <img 
                    style="max-height:100%;"
                    src="/src/assets/Furnitures/Wooden-Bed-Hero.png">
              </div>
              <div class="card-content">
                <h3>Wooden Bed</h3>
                <p>Experience the perfect blend of sustainable local craftsmanship and timeless comfort with our handcrafted wooden beds, designed to bring nature’s warmth into your home.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="app-section">
            <div class="section-title">
                <h4>Our Services</h4>
            </div>
            <h3>Bussiness Address</h3>
            <p><a href="https://maps.app.goo.gl/ZF9Uhd2ZvDB9FTNC8">
                Pindolonan II, Saguiaran, Lanao del Norte, Philippines
            </a></p>
            <h3>Contact Number</h3>
            <p>(+63)963 587 3511</p>
        </div>
    </div>
</template>

<style scoped>
h3 {
    color: var(--primary-color);
}


img {
  width: 200px; /* Base size */
  cursor: pointer;
  transition: transform 0.3s ease; /* Smooth animation */
  z-index: 1;
}

img:active {
    transform: scale(1.5);
    transition: transform 0.3s ease;
    position: relative;
}

</style>