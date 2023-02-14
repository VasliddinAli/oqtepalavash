<template>
    <section>
      <div class="cart">
        <div v-if="orders.length == 0" class="cart-empty">
          <div class="card">
            <h1>your_basket_is_empty</h1>
            <p>the_items_you_order_will_appear_here</p>
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
  