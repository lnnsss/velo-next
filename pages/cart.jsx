import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { CartPage } from "../components/CartPage/CartPage";
import { PageLayout } from "../components/PageLayout";

export default function Cart() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <CartPage currentTheme={currentTheme} cartList={cartList} setCartList={setCartList} />
    </PageLayout>
  );
}
