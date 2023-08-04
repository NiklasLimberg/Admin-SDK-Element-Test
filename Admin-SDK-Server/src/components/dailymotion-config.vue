<template>
<div>
    <h2>
        Config!
    </h2>
    Video-Code: <input v-model="dailyUrl" type="text"/><br/>
</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { data } from "@shopware-ag/admin-extension-sdk";

interface DailymotionConfig {
    config?: {
        dailyUrl?: {
            source?: string
            value?: string
        }
    }
}

const props = defineProps<{ publishingKey: string }>();

const element = ref<DailymotionConfig | null>({});

const dailyUrl = computed({
    get() {
        return element?.value?.config?.dailyUrl?.value || '';
    },
    set(value: string): void {
        if(typeof element.value?.config?.dailyUrl !== 'object') {
            element.value = {};
            element.value.config = {};
            element.value.config.dailyUrl = {}
        }

        element.value.config.dailyUrl.value = value;
        element.value.config.dailyUrl.source = 'static';

        data.update({
            id: props.publishingKey,
            data: element.value,
        });
    }
});

onMounted(async () => {
    console.log(props.publishingKey);
    data.subscribe(props.publishingKey, (initialData) => {
        if (typeof initialData.data === 'object') { 
            element.value = initialData.data;
        }
    });
});
</script>
