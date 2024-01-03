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
import { CONSTANTS } from "../constants";

interface DailymotionConfig {
    config?: {
        dailyUrl?: {
            value?: string
        }
    }
}

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

        data.update({
            id: CONSTANTS.PUBLISHING_KEY,
            data: element.value,
        });
    }
});

onMounted(() => {
    data.subscribe(CONSTANTS.PUBLISHING_KEY, ({ data }) => {
        if (typeof data === 'object') { 
            element.value = data;
        }
    });
});
</script>
