
import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer"
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
export default DefaultLayout;