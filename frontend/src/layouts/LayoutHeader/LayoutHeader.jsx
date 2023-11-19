
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer"
import { useSelector } from "react-redux";
import HeaderNoResponse from "../components/HeaderNoResponse";

function LayoutHeader({ children }) {
  return (
    <div className="min-w-[375px]">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default LayoutHeader;