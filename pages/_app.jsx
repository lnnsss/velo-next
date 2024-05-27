import clsx from "clsx";
import "../styles/global.css";
import { AppProvider } from "../contexts/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className={clsx("text-slate-900")}>
        <Component {...pageProps} />
        <div id="modals"></div>
      </div>
    </AppProvider>
  );
}
