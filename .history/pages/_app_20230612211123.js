import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// _app.js



export default appWithTranslation(MyApp);


