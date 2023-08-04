<template>
    <div class="app-container">
        <DailymotionElement :publishingKey="stageComponent.dataSetId" v-if="stageComponent.isLocation"></DailymotionElement>
        <DailymotionConfig :publishingKey="configComponent.dataSetId" v-else-if="configComponent.isLocation"></DailymotionConfig>
        <DailymotionPreview v-else-if="previewComponent.isLocation"></DailymotionPreview>
    </div>
</template>

<script lang="ts" setup>
import { cms } from '@shopware-ag/admin-extension-sdk';

import DailymotionElement from './components/dailymotion-element.vue';
import DailymotionPreview from './components/dailymotion-preview.vue';
import DailymotionConfig from './components/dailymotion-config.vue';

const previewComponent = cms.isCmsLocation('dailymotion', 'preview');
const stageComponent = cms.isCmsLocation('dailymotion', 'component');
const configComponent = cms.isCmsLocation('dailymotion', 'config');
</script>
