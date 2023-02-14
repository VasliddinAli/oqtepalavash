<template>
  <section>
    <div class="main">
      <div class="navMob-locate">
          <div><i class="fa-solid fa-location-dot"></i></div>
          <div class="loc">
            <p>Olib ketish: Saylgoh ko'chasi, 42, Fergana, Uzbekistan</p>
          </div>
        </div>
      <n-carousel class="carousel" draggable autoplay>
        <img src="../assets/images/slide1.webp" class="carousel-image" />
        <img src="../assets/images/slide2.webp" class="carousel-image" />
        <img src="../assets/images/slide3.webp" class="carousel-image" />
      </n-carousel>
    </div>
    <ProductsMenu />
  </section>
</template>

<script>
import ProductsMenu from "../components/ProductsMenu.vue";
import { defineComponent, ref } from "vue";
import { NIcon } from "naive-ui";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  components:{
    ProductsMenu,
  },
  setup() {
    return {
      options: [
        {
          label: "UZ",
          value: "UZ",
        },
        {
          label: "RU",
          value: "RU",
        },
        {
          label: "EN",
          value: "EN",
        },
      ],
    };
  },
});
</script>
