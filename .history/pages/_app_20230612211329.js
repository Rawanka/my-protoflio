import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import './components/i18n.js';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
// _app.js



export default appWithTranslation(MyApp);


