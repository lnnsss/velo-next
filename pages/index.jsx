import { MainPage } from "../components/MainPage/MainPage";
import { PageLayout } from "../components/PageLayout";
import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";

export default function HomePage() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <MainPage currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
    </PageLayout>
  );
}
