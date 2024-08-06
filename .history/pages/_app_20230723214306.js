import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import '../components/i18n.js';
import i18n from '../components/i18n';
import React, { useState, useEffect } from 'react';
import PubNub from 'pubnub';
import { PubNubProvider, usePubNub } from 'pubnub-react';

const pubnub = new PubNub({
  publishKey: 'myPublishKey',
  subscribeKey: 'mySubscribeKey',
  uuid: 'myUniqueUUID'
});

function MyApp({ Component, pageProps }) {
  return     <PubNubProvider client={pubnub}>
  <Chat />
</PubNubProvider>
  <Component {...pageProps} />
  
}
// _app.js



export default appWithTranslation(MyApp);


