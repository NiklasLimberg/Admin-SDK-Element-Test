<template>
<div>
    <h2>
        Config!
    </h2>
    Video-Code: <input v-model="dailyUrl" type="text"/><br/>
</div>
</template>
<script lang="ts" setup>
import {ref, computed, onMounted} from 'vue'
import { data } from "@shopware-ag/admin-extension-sdk";
import { CONSTANTS } from "../constants";

interface DailymotionConfig {
    config?: {
        dailyUrl?: string
    }
}

const element = ref<DailymotionConfig | null>({});

const dailyUrl = computed({
    get() {
        return element?.value?.config?.dailyUrl || '';
    },
    set(value: string): void {
        if(typeof element.value?.config !== 'object') {
            element.value = {};
            element.value.config = {};
        }

        element.value.config.dailyUrl = value;

        data.update({
            id: CONSTANTS.PUBLISHING_KEY,
            data: element,
        });
    }
});

onMounted(async () => {
    const initalData = await data.get({ id: CONSTANTS.PUBLISHING_KEY });
    if (typeof initalData === 'object') { 
        element.value = initalData;
    }
});
</script>
