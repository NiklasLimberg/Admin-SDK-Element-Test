<template>
<div>
    <h2>
        Element!
    </h2>
    <div class="sw-cms-el-dailymotion">
        <div class="sw-cms-el-dailymotion-iframe-wrapper">
            <iframe
                frameborder="0"
                type="text/html"
                width="100%"
                height="100%"
                :src="dailyUrl">
            </iframe>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted  } from 'vue'
import { data } from "@shopware-ag/admin-extension-sdk";
import { CONSTANTS } from "../constants";

interface DailymotionConfig {
    config?: {
        dailyUrl?: string
    }
}

const element = ref<DailymotionConfig|null>(null)

const dailyUrl = computed(() => {
    return `https://www.dailymotion.com/embed/video/${element?.value?.config?.dailyUrl || ''}`;
});

function elementSubscriber(response: { data: unknown, id: string }): void {
    const data = response.data;
    if(typeof data === 'object') { 
        element.value = data;
    }
}

onMounted(async () => {
    const initalData = await data.get({ id: CONSTANTS.PUBLISHING_KEY });
    
    if(typeof initalData === 'object') { 
        element.value = initalData;
    }
    
    data.subscribe(CONSTANTS.PUBLISHING_KEY, elementSubscriber);
});
</script>
