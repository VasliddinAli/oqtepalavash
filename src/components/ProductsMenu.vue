<template>
  <div class="products">
    <div class="products-header">
      <a href="#yangiliklar"><div>Yangiliklar</div></a>
      <a href="#setlar">Setlar</a>
      <a href="#lavashlar">Lavashlar</a>
      <a href="#Xaggi">Xaggi</a>
      <a href="#sendvich">Sendvich</a>
      <a href="#burger">Donerlar</a>
      <a href="#pitsalar">Pitsalar</a>
      <a href="#hotDog">HotDoglar</a>
      <a href="#sneklar">Sneklar</a>
      <a href="#">Shirinliklar</a>
      <a href="#">Ichimliklar</a>
      <a href="#">Salatlar</a>
      <a href="#">Souslar</a>
    </div>
    <div class="products-items" id="yangiliklar">
      <h1>🐥 Qarsildoq Yangiliklar</h1>
      <div class="cards">
        <div class="card" v-for="yangilik of yangiliklar" :key="yangilik.id">
          <img :src="yangilik.img" alt="" />
          <h2>{{ yangilik.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ yangilik.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ yangilik.price }}</span> so'm
            </p>
            <button @click="addProduct(yangilik.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="setlar">
      <h1>🍱 Setlar</h1>
      <div class="cards">
        <div class="card" v-for="set of setlar" :key="set.id">
          <img :src="set.img" alt="" />
          <h2>{{ set.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ set.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ set.price }}</span> so'm
            </p>
            <button @click="addProduct(set.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="lavashlar">
      <h1>🌯 Lavashlar</h1>
      <div class="cards">
        <div class="card" v-for="lavash of lavashlar" :key="lavash.id">
          <img :src="lavash.img" alt="" />
          <h2>{{ lavash.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ lavash.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ lavash.price }}</span> so'm
            </p>
            <button @click="addProduct(lavash.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="Xaggi">
      <h1>🥙 Xaggi</h1>
      <div class="cards">
        <div class="card" v-for="xaggi of xaggilar" :key="xaggi.id">
          <img :src="xaggi.img" alt="" />
          <h2>{{ xaggi.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ xaggi.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ xaggi.price }}</span> so'm
            </p>
            <button @click="addProduct(xaggi.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="sendvich">
      <h1>🥪 Klab Sendvich</h1>
      <div class="cards">
        <div class="card" v-for="sandvich of sandvichlar" :key="sandvich.id">
          <img :src="sandvich.img" alt="" />
          <h2>{{ sandvich.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ sandvich.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ sandvich.price }}</span> so'm
            </p>
            <button @click="addProduct(sandvich.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="burger">
      <h1>🍔 Burger Va Donerlar</h1>
      <div class="cards">
        <div class="card" v-for="doner of donerlar" :key="doner.id">
          <img :src="doner.img" alt="" />
          <h2>{{ doner.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ doner.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ doner.price }}</span> so'm
            </p>
            <button @click="addProduct(doner.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="pitsalar">
      <h1>🍕 Pitsalar</h1>
      <div class="cards">
        <div class="card" v-for="pitsa of pitsalar" :key="pitsa.id">
          <img :src="pitsa.img" alt="" />
          <h2>{{ pitsa.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ pitsa.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ pitsa.price }}</span> so'm
            </p>
            <button @click="addProduct(pitsa.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="hotDog">
      <h1>🌭 Hot-Doglar</h1>
      <div class="cards">
        <div class="card" v-for="hot of hotDog" :key="hot.id">
          <img :src="hot.img" alt="" />
          <h2>{{ hot.name }}</h2>
          <n-ellipsis expand-trigger="click" style="max-width: 100%" :line-clamp="1">
            <p class="title">{{ hot.title }}</p>
          </n-ellipsis>
          <div>
            <p>
              <span>{{ hot.price }}</span> so'm
            </p>
            <button @click="addProduct(hot.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
    <div class="products-items" id="sneklar">
      <h1>🍟 Sneklar</h1>
      <div class="cards">
        <div class="card" v-for="snek of sneklar" :key="snek.id">
          <img :src="snek.img" alt="" />
          <h2>{{ snek.name }}</h2>
          <div>
            <p>
              <span>{{ snek.price }}</span> so'm
            </p>
            <button @click="addProduct(snek.id)">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yangiliklar: [
        {
          id: 1,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fbd73021b-b83a-48dd-b298-f94fd066acc1&w=1920&q=75",
          name: "Jo'ja boks",
          title: "Strips 3 dona, kartoshka fri o'rta va ketchup",
          price: 23000,
        },
        {
          id: 2,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F5eeaa400-5c8d-4e2c-b8b9-88b63ceb0ed1&w=1920&q=75",
          name: "Strips 5 dona",
          title: "Qarsildoq panirovkadagi uzun shaklda kesilgan tovuq bo'...",
          price: 18000,
        },
        {
          id: 3,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fed8396d7-c87c-4054-833a-f538881b2e06&w=1920&q=75",
          name: "Strips 3 dona",
          title: "Qarsildoq panirovkadagi uzun shaklda kesilgan tovuq bo'...",
          price: 15000,
        },
        {
          id: 4,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7342ade4-5327-49ce-bd54-b0ef3d999855&w=1920&q=75",
          name: "Baytslar",
          title: "Qarsildoq panirovkadagi tovuq bo'laklari",
          price: 13000,
        },
      ],
      setlar: [
        {
          id: 5,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa23de256-75d3-437e-9c9a-aea260a1f634&w=1920&q=75",
          name: "Oqtepa seti",
          title: "Kartoshka fri o'rta, Pepsi 0.4L",
          price: 16000,
        },
        {
          id: 6,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fbde203c5-5a92-47b2-b59a-f453cb72cef6&w=1920&q=75",
          name: "Oqtepa seti #2",
          title: "Kartoshka fri o'rta, limonli choy",
          price: 16000,
        },
        {
          id: 7,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fb267a12c-e3ba-45c1-87f2-d3a3858a57ff&w=1920&q=75",
          name: "Juftlik seti",
          title: "Klab sendvich, strips 3 dona, Pepsi 0.4L 2 dona, ketchu...",
          price: 50000,
        },
        {
          id: 8,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe81cc85d-2c6d-448c-af4c-b9a87da07c16&w=1920&q=75",
          name: "Baraka seti",
          title: "Assorti pitsa, kartoshka fri o'rta 3 dona, Pepsi 0.4L 3...",
          price: 114000,
        },
      ],
      lavashlar: [
        {
          id: 9,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe9138533-83fa-45bf-9e48-2c0dcd7a33e1&w=1920&q=75",
          name: "Original lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so..",
          price: 26000,
        },
        {
          id: 10,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3dce503d-e9e2-40b2-b79e-53283ed0324c&w=1920&q=75",
          name: "Original kichik lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 22000,
        },
        {
          id: 11,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F16947f91-b86e-4492-9ede-efb42b61ace2&w=1920&q=75",
          name: "Pishloqli lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 29000,
        },
        {
          id: 12,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F25e037fd-f570-4b76-aba1-ee5e7e95e690&w=1920&q=75",
          name: "Pishloqli kichik lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 25000,
        },
        {
          id: 13,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F47f1c95c-afef-4f73-8b66-f78f59ce23ca&w=1920&q=75",
          name: "Tandir lavash",
          title: "Tandir pechida pishirilgan yupqa lavash non, pomidor, c...",
          price: 27000,
        },
        {
          id: 14,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4ff828b8-6b7c-4363-acfc-f1c7b1f003db&w=1920&q=75",
          name: "Pishloqli tandir lavash",
          title: "Tandirda pishirilgan yupqa lavash non, pomidor, chips, ...",
          price: 30000,
        },
        {
          id: 15,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F999f9af7-2d12-4c6b-8ad6-182ca113e8bd&w=1920&q=75",
          name: "Xalapenyoli lavash",
          title: "Yupqa pita noni, pomidor, xalapenyo, chips, mol go'shti...",
          price: 27000,
        },
      ],
      xaggilar: [
        {
          id: 16,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F09a6bc9f-8432-47d6-87a9-59960cced454&w=1920&q=75",
          name: "Xaggi",
          title: "Baget noni, mayonez, mol go'shti, salat bargi, bodring,...",
          price: 19000,
        },
      ],
      sandvichlar: [
        {
          id: 17,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff12d80bf-862e-430b-a3fa-dddb06684ffb&w=1920&q=75",
          name: "Klab sendvich",
          title: "Toster non, maxsus sous, bodring, pomidor, tovuq filesi...",
          price: 27000,
        },
      ],
      donerlar: [
        {
          id: 18,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fce4d6845-4a03-45ee-a601-6b4458b1d521&w=1920&q=75",
          name: "Gamburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 21000,
        },
        {
          id: 19,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6683eb22-797d-4ef0-be22-047802de4af8&w=1920&q=75",
          name: "Chizburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 23000,
        },
        {
          id: 20,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ffb01dfd2-dfa6-43a5-b502-e3b0a13b1ce0&w=1920&q=75",
          name: "Big Burger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 31000,
        },
        {
          id: 21,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6d694496-b823-445a-aa44-855d84f5618d&w=1920&q=75",
          name: "Big Chizburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 35000,
        },
        {
          id: 22,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff831c414-2692-4412-8383-77ce193c41ff&w=1920&q=75",
          name: "Big Doner",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 25000,
        },
        {
          id: 23,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc8e6ec81-ad68-4652-b6f7-350113f9e0b2&w=1920&q=75",
          name: "Shaurma",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 21000,
        },
      ],
      pitsalar:[
        {
          id: 24,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Ff991c6ef-97c9-4799-9b8b-05d92b3f91ed&w=1920&q=75",
          name: "Assorti pitsa",
          title: "Oq sous, zaytun, qo'ziqorin, bulg'or qalampiri, pomidor...",
          price: 78000,
        },
        {
          id: 25,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcb8b7b3b-0187-4d7c-9d25-78a9820502ef&w=1920&q=75",
          name: "Go'shtli pitsa",
          title: "Oq sous, zaytun, qo'ziqorin, bulg'or qalampiri, pomidor...",
          price: 78000,
        },
        {
          id: 26,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F2c5bca56-38c3-43bf-ab47-9a857fe1dfcd&w=1920&q=75",
          name: "Qazili pitsa",
          title: "“OQTEPA” pomidor sousi, 'Brunswick' shirin piyoz halqal...",
          price: 830000,
        },
        {
          id: 27,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc014d989-c876-4bc1-bdcd-19972384b127&w=1920&q=75",
          name: "Peperoni pitsa",
          title: "“OQTEPA” pomidor sousi, dudlangan kolbasa, Mozzarella v..",
          price: 69000,
        },
        {
          id: 28,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F9d3eefbe-e4df-4e80-a974-2adf536261da&w=1920&q=75",
          name: "Qo'ziqorinli pitsa",
          title: "'OQTEPA' pomidor sousi, qo'ziqorin, sarimsoq yog'i, ore...",
          price: 67000,
        },
        {
          id: 29,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc5fefd65-1200-4534-b178-189c4a0ca0af&w=1920&q=75",
          name: "Tovuqli pitsa",
          title: "'OQTEPA' pomidor sousi, kurka, tovuq, qo'ziqorin, zaytu...",
          price: 67000,
        },
      ],
      hotDog:[
        {
          id: 30,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fc660318b-b005-4b2f-a140-e1ddd5094f57&w=1920&q=75",
          name: "Shohona Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 20000,
        },
        {
          id: 31,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6db41563-a50f-42e9-a340-208dad0a2ed7&w=1920&q=75",
          name: "Pishloqli Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 13000,
        },
        {
          id: 32,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F7fda8ad7-0b36-407f-b552-3aec6dbdddcb&w=1920&q=75",
          name: "Xalapenyoli Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 15000,
        },
        {
          id: 33,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa25e5942-b3b1-415b-ab63-a51aee74f7fa&w=1920&q=75",
          name: "Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 10000,
        },
      ],
      sneklar:[
        {
          id: 34,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F3c9aaefc-fd11-45c6-b49b-d9f81b78ae22&w=1920&q=75",
          name: "Kartoshka fri kichik",
          title: "",
          price: 7000,
        },
        {
          id: 35,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F54a71a65-7eb5-4cbf-bc7e-d68e1bbc492a&w=1920&q=75",
          name: "Kartoshka fri o'rta",
          title: "",
          price: 13000,
        },
        {
          id: 36,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa53dc8d3-76ca-4491-9656-855cffd39486&w=1920&q=75",
          name: "Kartoshka fri katta",
          title: "",
          price: 16000,
        },
        {
          id: 37,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F6b8b8140-9b1b-4520-a559-df9a07c43269&w=1920&q=75",
          name: "Jaydari kartoshka",
          price: 14000,
        },
        {
          id: 38,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F2562846c-ea1b-485f-a87f-83bdb7e2c388&w=1920&q=75",
          name: "Xalapenyo",
          price: 3000,
        },
        {
          id: 39,
          img: "https://oqtepalavash.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fa8cf109a-64d1-4236-a029-47ed1ce37491&w=1920&q=75",
          name: "Non",
          price: 3000,
        },
      ]
    };
  },
  methods: {
    addProduct(id){
    }
  },
};
</script>