<template>
  <section>
    <div class="cart">
      <div v-if="orders.length == 0" class="cart-empty">
        <div class="card">
          <img src="../assets/images/empty_cart.svg" alt="" />
          <h1>Buyurtmalar tarixi yo'q</h1>
          <p>Sizda buyurtma yo'q, mahsulotlarni tanlang va buyurtma bering</p>
          <router-link to="/">Menyuga qaytish</router-link>
        </div>
      </div>
      <div class="cart-products" v-else></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
    };
  },
};
</script>

<style></style>
