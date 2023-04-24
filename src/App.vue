<script setup>
import Fingerprint from './components/Fingerprint.vue'
</script>

<template>
    <Suspense>
        <!-- component with nested async dependencies -->
        <Fingerprint />

        <!-- loading state via #fallback slot -->
        <template #fallback>
            Loading...
        </template>

    </Suspense>
    <div style="margin-top: 10em;">

        <a href="https://github.com/verifiedit/fp-hb-integration-issue"><img src="./assets/github-mark-white.svg" alt="GitHub Repo" /></a>
    </div>
</template>
