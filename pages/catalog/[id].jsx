import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { PageLayout } from "../../components/PageLayout";
import { useRouter } from "next/router";
import { TovarPage } from "../../components/Pages/TovarPage/TovarPage";

export default function tovar() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);
  const { finalTovarList, setFinalTovarList } = useContext(AppContext);

  const router = useRouter();
  const [tovar, setTovar] = useState(null);

  // поиск нужного товара в массиве обьектов finalTovarList
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const foundTovar = finalTovarList.find((el) => Number(el.id) === Number(id));
      setTovar(foundTovar);
    }
  }, [router.query, finalTovarList]);

  return (
    <PageLayout
      title={tovar ? tovar.title : "tovar"}
      currentTheme={currentTheme}
      setCurrentTheme={setCurrentTheme}
      cartList={cartList}
    >
      {tovar ? (
        <TovarPage currentTheme={currentTheme} tovar={tovar} />
      ) : (
        <div className="mt-[250px] mx-auto w-10 text-xl text-bold">Loading...</div>
      )}
    </PageLayout>
  );
}
