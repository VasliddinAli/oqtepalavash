<template>
  <section>
    <div class="navbar">
      <div class="navbar-left">
        <router-link to="/"><img class="logo" src="../assets/images/logo.webp" alt="" /></router-link>
        <div class="links">
          <router-link class-active="active" to="/">Menyu</router-link>
          <router-link class-active="active" to="/branches">Filiallar</router-link>
          <router-link class-active="active" to="/about">Biz Haqimizda</router-link>
          <router-link class-active="active" to="/contact">Bog'lanish</router-link>
        </div>
      </div>
      <div class="navbar-right">
        <div class="elem">
          <div><i class="fa-solid fa-location-dot"></i></div>
          <div class="loc">
            <p>Olib ketish</p>
            <p>массив Кадыри</p>
          </div>
        </div>
        <div class="elem">
          <n-dropdown trigger="hover" :options="options">
            <n-button>O'zbekcha</n-button>
          </n-dropdown>
        </div>
        <router-link to="/cart" class="elem">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>{{ umum }} so'm</p>
        </router-link>
        <div class="elem dropdown">
          <button @click="dropdown" class="dropdown-button">
            <i class="fa-solid fa-user"></i>
          </button>
          <div v-if="dropList" class="dropdown-list">
            <router-link @click="dropdown" to="/profile">Profil</router-link>
            <router-link @click="dropdown" to="/orders">Buyurtmalarim</router-link>
            <router-link @click="dropdown" to="/address">Manzillarim</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="navMob">
      <div class="navMob-top">
        <div class="left">
          <i @click="show = true" class="fa-solid fa-bars"></i>
          <router-link to="/"><img class="logo" src="../assets/images/logo.webp" alt="" /></router-link>
        </div>
        <div class="right">
          <router-link to="/cart" class="elem">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>{{ umum }} so'm</p>
          </router-link>
        </div>
      </div>
      <div class="navMob-menu">
        <n-drawer placement="left" v-model:show="show" :width="300">
          <n-drawer-content header-style="background: #f6f8f9;font-size: 20px; height: 60px"
            body-content-style="display: flex; flex-direction: column;gap: 10px;" title="Menyu" closable>
            <n-dropdown body-content-style=" width: 100%;padding: 10px;border-radius: 10px;" trigger="hover"
              :options="options">
              <n-button>O'zbekcha</n-button>
            </n-dropdown>
            <button
              style="border: 0;padding: 10px;font-size: 16px;color: #e62b40;width: 100%;text-align: left;background: #00000004;cursor: pointer;border-radius: 10px;">Kirish</button>
            <p style="width: 100%;height: 1px;background: #0000001e; margin: 10px 0;"></p>
            <div class="Moblinks">
              <router-link @click="show = false" class-active="active" to="/">Menyu</router-link>
              <router-link @click="show = false" class-active="active" to="/branches">Filiallar</router-link>
              <router-link @click="show = false" class-active="active" to="/about">Biz Haqimizda</router-link>
              <router-link @click="show = false" class-active="active" to="/contact">Bog'lanish</router-link>
            </div>
          </n-drawer-content>
        </n-drawer>
      </div>


      <div class="nav_bottom">
        <router-link class-active="active" to="/">
          <div class="bolim">
            <div class="icon"><i class="fa-solid fa-house"></i></div>
            <div class="label">Bosh sahifa</div>
          </div>
        </router-link>
        <router-link class-active="active" to="/branches">
          <div class="bolim">
            <div class="icon"><i class="fa-solid fa-code-branch"></i></div>
            <div class="label">Filiallar</div>
          </div>
        </router-link>
        <router-link class-active="active" to="/contact">
          <div class="bolim">
            <div class="icon"><i class="fa-solid fa-phone-volume"></i></div>
            <div class="label">Bog'lanish</div>
          </div>
        </router-link>
        <router-link class-active="active" to="/cart">
          <div class="bolim">
            <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="label">Savat</div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NIcon } from "naive-ui";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default defineComponent({
  setup() {
    return {
      dropList: ref(false),
      show: ref(false),
      umum: 27000,
      options: [
        {
          label: "O'zbekcha",
          value: "O'zbekcha",
        },
        {
          label: "Ruscha",
          value: "Ruscha",
        },
        {
          label: "Inglizcha",
          value: "Inglizcha",
        },
      ]
    };
  },
  methods: {
    dropdown() {
      if (this.dropList != true) {
        this.dropList = true
      }
      else {
        this.dropList = false
      }
    }
  },
});
</script>