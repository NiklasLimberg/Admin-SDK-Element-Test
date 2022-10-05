<template>
    <div class="app-container">
        <DailymotionElement v-if="location.is('dailymotion-element')"></DailymotionElement>
        <DailymotionConfig v-else-if="location.is('dailymotion-config')"></DailymotionConfig>
        <DailymotionPreview v-else-if="location.is('dailymotion-preview')"></DailymotionPreview>
    </div>
</template>

<script lang="ts" setup>
import { location } from '@shopware-ag/admin-extension-sdk';

import DailymotionElement from './components/dailymotion-element.vue';
import DailymotionPreview from './components/dailymotion-preview.vue';
import DailymotionConfig from './components/dailymotion-config.vue';
</script>
