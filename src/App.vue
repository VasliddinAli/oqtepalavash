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
const notification = useNotification()
const route = useRoute()
const router = useRouter()

router.beforeEach(()=>{
  loading.start()
  message.success(route.name)
  notification.info({
    content: 'What to say?',
    meta: "I don't know",
    duration: 2500,
    keepAliveOnHover: true
  })
})
router.afterEach(()=>{
  loading.finish()
  message.success(route.name)
  notification.warning({
    content: 'What to say?',
    meta: "I don't know",
    duration: 2500,
    keepAliveOnHover: true
  })
})
router.onError(()=>{
  loading.error()
  message.success(route.name)
})

</script>