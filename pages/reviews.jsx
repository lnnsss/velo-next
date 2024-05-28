import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { ReviewsPage } from "../components/ReviewsPage/ReviewsPage";
import { PageLayout } from "../components/PageLayout";

export default function Reviews() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <ReviewsPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
