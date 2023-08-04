<template>
<div>
    <h2>
        Element!
    </h2>
    <div class="sw-cms-el-dailymotion">
        <div class="sw-cms-el-dailymotion-iframe-wrapper">
            {{ dailyUrl }}
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted  } from 'vue';
import { data } from "@shopware-ag/admin-extension-sdk";

const props = defineProps<{publishingKey: string}>();

interface DailymotionConfig {
    config?: {
        dailyUrl?: {
            value?: string,
            source?: string,
        }
    }
}

const element = ref<DailymotionConfig|null>(null)

const dailyUrl = computed(() => {
    return `https://www.dailymotion.com/embed/video/${element?.value?.config?.dailyUrl?.value || ''}`;
});

function elementSubscriber(response: { data: unknown, id: string }): void {
    const data = response.data;
    if(typeof data === 'object') { 
        element.value = data;
    }
}

onMounted(async () => {
    const initialData = await data.get({ id: props.publishingKey });
    
    if(typeof initialData === 'object') { 
        element.value = initialData;
    }
    
    data.subscribe(props.publishingKey, elementSubscriber);
});
</script>
