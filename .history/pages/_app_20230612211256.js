import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import '.omponents\i18n.js';
c
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// _app.js



export default appWithTranslation(MyApp);


