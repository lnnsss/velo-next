import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AddPage } from "../components/AddPage/AddPage";
import { PageLayout } from "../components/PageLayout";

export default function Add() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { tovarList, setTovarList } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout title="Добавить релиз" currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <AddPage
        currentTheme={currentTheme}
        tovarList={tovarList}
        setTovarList={setTovarList}
      />
    </PageLayout>
  );
}
