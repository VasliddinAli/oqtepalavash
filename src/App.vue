<template>
    <HeaderView />
      <router-view />
    <FooterMenu />
</template>

<script setup>
import FooterMenu from "./components/FooterMenu.vue";
import HeaderView from "./components/HeaderView.vue";
import { ref } from 'vue'
import { useLoadingBar , useMessage , useNotification } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
const loading = useLoadingBar()
const message = useMessage()
const route = useRoute()
const router = useRouter()

router.beforeEach(()=>{
  loading.start()
})
router.afterEach(()=>{
  loading.finish()
})
router.onError(()=>{
  loading.error()
  message.success(route.name)
})

</script>
