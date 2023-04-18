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
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Jo'ja boks",
          title: "Strips 3 dona, kartoshka fri o'rta va ketchup",
          price: 23000,
        },
        {
          id: 2,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Strips 5 dona",
          title: "Qarsildoq panirovkadagi uzun shaklda kesilgan tovuq bo'...",
          price: 18000,
        },
        {
          id: 3,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Strips 3 dona",
          title: "Qarsildoq panirovkadagi uzun shaklda kesilgan tovuq bo'...",
          price: 15000,
        },
        {
          id: 4,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Baytslar",
          title: "Qarsildoq panirovkadagi tovuq bo'laklari",
          price: 13000,
        },
      ],
      setlar: [
        {
          id: 5,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Oqtepa seti",
          title: "Kartoshka fri o'rta, Pepsi 0.4L",
          price: 16000,
        },
        {
          id: 6,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Oqtepa seti #2",
          title: "Kartoshka fri o'rta, limonli choy",
          price: 16000,
        },
        {
          id: 7,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Juftlik seti",
          title: "Klab sendvich, strips 3 dona, Pepsi 0.4L 2 dona, ketchu...",
          price: 50000,
        },
        {
          id: 8,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Baraka seti",
          title: "Assorti pitsa, kartoshka fri o'rta 3 dona, Pepsi 0.4L 3...",
          price: 114000,
        },
      ],
      lavashlar: [
        {
          id: 9,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Original lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so..",
          price: 26000,
        },
        {
          id: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Original kichik lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 22000,
        },
        {
          id: 11,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Pishloqli lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 29000,
        },
        {
          id: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Pishloqli kichik lavash",
          title: "Yupqa lavash non, pomidor, chips, mol go'shti, qizil so...",
          price: 25000,
        },
        {
          id: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Tandir lavash",
          title: "Tandir pechida pishirilgan yupqa lavash non, pomidor, c...",
          price: 27000,
        },
        {
          id: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Pishloqli tandir lavash",
          title: "Tandirda pishirilgan yupqa lavash non, pomidor, chips, ...",
          price: 30000,
        },
        {
          id: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Xalapenyoli lavash",
          title: "Yupqa pita noni, pomidor, xalapenyo, chips, mol go'shti...",
          price: 27000,
        },
      ],
      xaggilar: [
        {
          id: 16,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Xaggi",
          title: "Baget noni, mayonez, mol go'shti, salat bargi, bodring,...",
          price: 19000,
        },
      ],
      sandvichlar: [
        {
          id: 17,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Klab sendvich",
          title: "Toster non, maxsus sous, bodring, pomidor, tovuq filesi...",
          price: 27000,
        },
      ],
      donerlar: [
        {
          id: 18,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Gamburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 21000,
        },
        {
          id: 19,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Chizburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 23000,
        },
        {
          id: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Big Burger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 31000,
        },
        {
          id: 21,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Big Chizburger",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 35000,
        },
        {
          id: 22,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Big Doner",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 25000,
        },
        {
          id: 23,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Shaurma",
          title: "Shirin bulochka, maxsus sous, aysberg, tuzlangan bodrin...",
          price: 21000,
        },
      ],
      pitsalar:[
        {
          id: 24,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Assorti pitsa",
          title: "Oq sous, zaytun, qo'ziqorin, bulg'or qalampiri, pomidor...",
          price: 78000,
        },
        {
          id: 25,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Go'shtli pitsa",
          title: "Oq sous, zaytun, qo'ziqorin, bulg'or qalampiri, pomidor...",
          price: 78000,
        },
        {
          id: 26,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Qazili pitsa",
          title: "“OQTEPA” pomidor sousi, 'Brunswick' shirin piyoz halqal...",
          price: 830000,
        },
        {
          id: 27,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Peperoni pitsa",
          title: "“OQTEPA” pomidor sousi, dudlangan kolbasa, Mozzarella v..",
          price: 69000,
        },
        {
          id: 28,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Qo'ziqorinli pitsa",
          title: "'OQTEPA' pomidor sousi, qo'ziqorin, sarimsoq yog'i, ore...",
          price: 67000,
        },
        {
          id: 29,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Tovuqli pitsa",
          title: "'OQTEPA' pomidor sousi, kurka, tovuq, qo'ziqorin, zaytu...",
          price: 67000,
        },
      ],
      hotDog:[
        {
          id: 30,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Shohona Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 20000,
        },
        {
          id: 31,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Pishloqli Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 13000,
        },
        {
          id: 32,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Xalapenyoli Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 15000,
        },
        {
          id: 33,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Hot-dog",
          title: "Hot-dog bulochkasi, maxsus sous, tuzlangan bodring, pom...",
          price: 10000,
        },
      ],
      sneklar:[
        {
          id: 34,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Kartoshka fri kichik",
          title: "",
          price: 7000,
        },
        {
          id: 35,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Kartoshka fri o'rta",
          title: "",
          price: 13000,
        },
        {
          id: 36,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Kartoshka fri katta",
          title: "",
          price: 16000,
        },
        {
          id: 37,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Jaydari kartoshka",
          price: 14000,
        },
        {
          id: 38,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
          name: "Xalapenyo",
          price: 3000,
        },
        {
          id: 39,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png",
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