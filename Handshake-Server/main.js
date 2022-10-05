import express from 'express';

import { App } from "shopware-app-server-sdk";
import { InMemoryShopRepository } from "shopware-app-server-sdk/repository.js";
import { convertRequest, convertResponse, rawRequestMiddleware } from 'shopware-app-server-sdk/runtime/node/express.js';
import { NodeHmacSigner } from 'shopware-app-server-sdk/runtime/node/signer.js';

import nodeFetch from 'node-fetch';
globalThis.fetch = nodeFetch;

const app = express();

const cfg = {
    appName: 'CustomElementTest',
    appSecret: '01f17b06402f0a24e6d2b084a6d18a87',
    authorizeCallbackUrl: 'http://localhost:3001/authorize/callback'
};

const appServer = new App(cfg, new InMemoryShopRepository, new NodeHmacSigner);

app.use(rawRequestMiddleware);

app.get('/authorize', async (req, res) => {
    const resp = await appServer.registration.authorize(convertRequest(req));

    convertResponse(resp, res);
});

app.post('/authorize/callback', async (req, res) => {
    const resp = await appServer.registration.authorizeCallback(convertRequest(req));

    convertResponse(resp, res);
});


app.listen(3001, () => {
    console.log(`App listening at 3001`);
})
