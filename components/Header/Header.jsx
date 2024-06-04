import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { HeaderMenu } from "./miniComponents/HeaderMenu";
import { HeaderBurger } from "./miniComponents/HeaderBurger";
import { HeaderLogo } from "./miniComponents/HeaderLogo";
import { HeaderLayout } from "./miniComponents/HeaderLayout";

export function Header({ cartList, handleToReg }) {
  const [burgerActive, setBurgerActive] = useState(false);
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartCounter, handleSetCartCounter } = useContext(AppContext);

  useEffect(() => {
    handleSetCartCounter();
  }, [cartList, cartCounter]);

  return (
    <HeaderLayout>
      <HeaderLogo />
      <HeaderBurger
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
      />
      <HeaderMenu
        burgerActive={burgerActive}
        cartList={cartList}
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        cartCounter={cartCounter}
      />
    </HeaderLayout>
  );
}
