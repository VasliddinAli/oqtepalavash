<template>
  <section>
    <div class="cart">
      <div v-if="products.length == 0" class="cart-empty">
        <div class="card">
          <img src="../assets/images/empty_cart.svg" alt="" />
          <h1>Sizning savatingiz hozircha bo'sh</h1>
          <p>Buyurtma qilingan narsalar shu yerda paydo bo'ladi.</p>
          <router-link to="/">Menyuga qaytish</router-link>
        </div>
      </div>
      <div class="cart-products" v-else>
        <h1>Savatcha</h1>
        <div class="basic">
          <div class="products">
            <div class="card" v-for="product of products" :key="product.id">
              <div class="img">
                <img :src="product.img" alt="" />
              </div>
              <div class="on">
                <div class="one">
                  <h1>{{ product.name }}</h1>
                  <n-ellipsis  expand-trigger="click" style="max-width: 200px" :line-clamp="1">
                    <p class="title">{{ product.title }}</p>
                  </n-ellipsis>
                </div>
                <div class="two">
                  <div class="incriment">
                    <button @click="minus">-</button>
                    <p>{{ soni }}</p>
                    <button @click="plus">+</button>
                  </div>
                  <div>
                    <p class="price">{{ product.price }} so'm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="umumiy">
            <h1>Umumiy</h1>
            <div>
              <p>Mahsulotlar</p>
              <h4>{{ umum }} so'm</h4>
            </div>
            <div>
              <p>Yetkazib berish</p>
              <h4>0 so'm</h4>
            </div>
            <p class="line"></p>
            <div>
              <p>To'lash uchun</p>
              <h4>{{ umum }} so'm</h4>
            </div>
            <button @click="showModal = true">To'lov saifasiga o'tish</button>
          </div>
        </div>
      </div>
    </div>
    <n-modal style="border-radius: 20px;" v-model:show="showModal">
      <n-card closable style="width: auto;">
        <div class="modal" style="width: 300px;display: flex;flex-direction: column;">
          <h1 style="font-size: 32px;text-align: center;">Tizimga kirish</h1>
          <p style="font-size: 18px;text-align: center;color: #808080;margin: 10px 0;">Telefon raqamingiz bilan tizimga kiring</p>
          <n-form-item label="Telefon raqam">
            <n-input v-model="phone" type="tel" style="padding: 3px; border-radius: 10px; font-size: 16px;" default-value="+998" show-count :maxlength="13" />
          </n-form-item>
          <n-space v-if="active" style="display: flex;flex-direction: column;">
            <n-form-item label="Tasdiqlash kodi">
              <n-input v-model="kod" type="number" style="padding: 3px; border-radius: 10px; font-size: 16px;" show-count :maxlength="6" />
            </n-form-item>
          <span style="font-variant-numeric: tabular-nums;display: flex;align-items: center;justify-content: center; margin-bottom:10px;">
            <n-countdown :duration="59000" :active="active" />
          </span>
        </n-space>
          <n-button @click="activeBtn" color="#ff0000" attr-type round size="large" type="error" >
            Ko'dni yuborish
          </n-button>
        </div>
      </n-card>
    </n-modal>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  data() {
    return {
      showModal: ref(false),
      active: ref(false),
      phone: null,
      kod: null,
      umum: 0,
      soni: 1,
      products: [
        {
          id: 1,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff12d80bf-862e-430b-a3fa-dddb06684ffb&w=1920&q=75",
          name: "Klab sendvich",
          title: "Toster non, maxsus sous, bodring, pomidor, tovuq filesi...",
          price: 27000,
        },
      ],
    };
  },
  methods: {
    activeBtn(){
      this.active = true
    },
    plus() {
      this.soni++;
      this.umum * this.soni;
      this.umumNarx();
    },
    minus() {
      if (this.soni >= 1) {
        this.soni--;
      }
    },
    umumNarx() {
      for (let i of this.products) {
        this.umum = i.price;
      }
    },
  },
  mounted() {
    this.umumNarx();
  },
});
</script>
