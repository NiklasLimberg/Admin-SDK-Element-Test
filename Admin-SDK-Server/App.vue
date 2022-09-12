<template>
    <div>
        <DailymotionElement v-if="location.is('dailymotion-element')"></DailymotionElement>
        <DailymotionConfig v-else-if="location.is('dailymotion-config')"></DailymotionConfig>
        <DailymotionPreview v-else-if="location.is('dailymotion-preview')"></DailymotionPreview>
    </div>
</template>


<script lang="ts" setup>
import { CONSTANTS }  from './constants';
import { cms, location } from '@shopware-ag/admin-extension-sdk';

void cms.registerCmsElement({
    name: CONSTANTS.CMS_ELEMENT_NAME,
    label: 'Dailymotion Video',
    defaultConfig: {
        dailyUrl: {
            source: 'static',
            value: '',
        },
    },
});

// watch for height changes
location.startAutoResizer();
</script>