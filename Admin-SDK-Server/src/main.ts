import { cms, location } from '@shopware-ag/admin-extension-sdk';
import { CONSTANTS } from './constants';

import { createApp } from 'vue';
import App from './App.vue';

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

console.log('[CustomElementTest] Dailymotion component registered successfully');

// watch for height changes
location.startAutoResizer();

createApp(App).mount('#extension');
