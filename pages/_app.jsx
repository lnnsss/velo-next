import "../styles/global.css";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <MemoryRouter>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </MemoryRouter>
      </AppProvider>
    </>
  );
}
