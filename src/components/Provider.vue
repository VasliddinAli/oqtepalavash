<template>
<n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
    <n-dialog-provider>
        <n-message-provider>
        <n-notification-provider>
        <n-loading-bar-provider>
            <App />
        </n-loading-bar-provider>
        </n-notification-provider>
        </n-message-provider>
    </n-dialog-provider>
    </n-loading-bar-provider>
</n-config-provider>
</template>
<script setup>
import App from '../App.vue'
import { darkTheme, lightTheme} from 'naive-ui'
</script>