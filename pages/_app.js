import 'import/styles/globals.css';
import 'import/styles/general.sass';

import MainLayout from 'import/src/components/layout/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
