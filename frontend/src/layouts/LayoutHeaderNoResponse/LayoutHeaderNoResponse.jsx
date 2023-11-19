
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer"
import { useSelector } from "react-redux";
import HeaderNoResponse from "../components/HeaderNoResponse";
import FooterCartPage from "../components/FooterCartPage";

function LayoutHeaderNoResponse({ children }) {
  return (
    <div className="min-w-[1216px]">
      <HeaderNoResponse />
      <div>{children}</div>
      <FooterCartPage />
    </div>
  );
}

export default LayoutHeaderNoResponse;