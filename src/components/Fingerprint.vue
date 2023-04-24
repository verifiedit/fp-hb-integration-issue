<script setup>
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-vue-v3'
import { ref } from 'vue'

const { error, getData, isLoading } = useVisitorData(
  { extendedResult: true },
  { immediate: true }
)
const fingerprint = ref()

getData({ ignoreCache: true }).then((fp) => {
  fingerprint.value = fp
})
</script>

<template>
    <div v-if="fingerprint">
        <strong>Fingerprint Pro Visitor ID:</strong> {{ fingerprint.visitorId }}
    </div>
    <div v-else-if="isLoading">
        Loading...
    </div>
    <div v-else>
        Unable to retrieve fingerprint.
    </div>
    <div v-if="error">
        {{ error.message }}
    </div>
</template>
