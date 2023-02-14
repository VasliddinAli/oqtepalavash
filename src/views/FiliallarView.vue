<template>
  <section>
    <div class="filiallar">
      <div class="filiallar-top">
        <div>
          <h1>Filiallar</h1>
        </div>
        <div>
          <button>Ro'yxat</button>
          <button>Xarita</button>
        </div>
      </div>
      <div class="filiallar-basic" v-for="filial of filiallar" :key="filial.id">
        <div class="top">
          <div>
            <h2>{{ filial.name }}</h2>
            <p>{{ filial.street }}</p>
          </div>
          <div>
            <p>{{ filial.yopiq }}</p>
          </div>
        </div>
        <p class="line"></p>
        <div class="bottom">
          <div>
            <h4>Ish vaqti:</h4>
            <p>{{ filial.vaqti }}</p>
          </div>
          <div>
            <h4>Telefon:</h4>
            <a :href="'tel:' + filial.phone">{{ filial.phone }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filiallar: [
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
        {
          name: "Юнусобод 5",
          street: "Ташкент, улица Еттичинор",
          yopiq: "10:00 gacha yopiq",
          vaqti: "Du-Yak: 10:00-03:00",
          phone: "+998781500030",
        },
      ],
    };
  },
};
</script>
