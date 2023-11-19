
import FooterCartPage from "~/layouts/components/FooterCartPage"
import HeaderCartPage from "../components/HeaderCartPage";
function LayoutHeaderCart({ children }) {
  return (
    <div className="">
      <HeaderCartPage type='Cart' />
      <div>{children}</div>
      <FooterCartPage />
    </div>
  );
}

export default LayoutHeaderCart;