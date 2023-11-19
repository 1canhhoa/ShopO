import route from '~/configs/route';
import LoginPage from '~/pages/LoginPage';
import SignupPage from '~/pages/SignupPage';
import Home from '~/pages/Home';
import LayoutHeader from '~/layouts/LayoutHeader/LayoutHeader';
import Account from '~/pages/Account';
import Support from '~/pages/Support';
import TrackOder from '~/pages/TrackOder';
import Shop from '~/pages/Shop'
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Faq from '~/pages/Faq';
import Activation from '~/pages/Activation';
import Cart from '~/components/Cart/Cart';
import LayoutHeaderCart from '~/layouts/LayoutHeaderCart/LayoutHeaderCart';
import ProductDetailsPage from '~/pages/ProductDetailsPage';
import User from '~/components/User/User';
import SellerForm from '~/components/Shop/SellerForm';
import SellerActivation from '~/pages/SellerActivation';
import LoginShopPage from '~/pages/LoginShopPage';
import LayoutDashBoard from '~/layouts/LayoutDashBoard/LayoutDashBoard';
import DashBoardOverView from '~/components/Shop/DashBoardOverView';
import DashBoardOders from '~/components/Shop/DashBoardOders';
import DashBoardCreateProduct from '~/components/Shop/DashBoardCreateProduct';
import DashBoardAllproduct from '~/components/Shop/DashBoardAllproduct';
import DashBoardCreateEvent from '~/components/Shop/DashBoardCreateEvent';
import DashBoardAllEvent from '~/components/Shop/DashBoardAllevent';
import DashBoardAllCoupounCode from '~/components/Shop/DashBoardAllCoupounCode';
import ViewShop from '~/pages/ViewShop';
import ProductsPage from '~/pages/ProductsPage';
import LayoutHeaderNoResponse from '~/layouts/LayoutHeaderNoResponse/LayoutHeaderNoResponse';
import Checkout from '~/components/Checkout/Checkout';
import LayoutCheckout from '~/layouts/LayoutCheckout/LayoutCheckout';
import DashBoardMessages from '~/components/Shop/DashBoardMessages';
import ChatClient from '~/components/ChatClient/ChatClient';
const privateRoutes = [
  { path: route.account, component: Account, layout: LayoutHeader },
  { path: route.support, component: Support, layout: LayoutHeader },
  { path: route.trackOder, component: TrackOder, layout: LayoutHeader },
  { path: route.shop, component: Shop, layout: LayoutHeader },
  { path: route.faq, component: Faq, layout: LayoutHeader },
  { path: route.about, component: About, layout: LayoutHeader },
  { path: route.blog, component: Blog, layout: LayoutHeader },
  { path: route.contact, component: Contact, layout: LayoutHeader },
  { path: route.cart, component: Cart, layout: LayoutHeaderCart },
  { path: route.product_name, component: ProductDetailsPage, layout: LayoutHeader },
  { path: route.products, component: ProductsPage, layout: LayoutHeader },
  // User
  { path: route.user, component: User, layout: LayoutHeaderNoResponse },
  // user-account
  { path: route.user_account_payment, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_account_address, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_account_notification, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_account_verify, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_account_profile, component: User, layout: LayoutHeaderNoResponse },
  //user-noticefication
  { path: route.user_notications_oder, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_notications_refunds, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_notications_promotion, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_notications_shopo, component: User, layout: LayoutHeaderNoResponse },
  { path: route.user_notications_wallet, component: User, layout: LayoutHeaderNoResponse },
  //user-purchase
  { path: route.user_purchase, component: User, layout: LayoutHeaderNoResponse },
  // user-vouchers
  { path: route.user_vouchers, component: User, layout: LayoutHeaderNoResponse },
  // checkout
  { path: route.checkout, component: Checkout, layout: LayoutCheckout },
  //Seller
  // view shop from user
  { path: route.view_shop, component: ViewShop, layout: LayoutHeader },
];
const publicRoutes = [
  { path: route.login_shop, component: LoginShopPage, layout: null },
  { path: route.activation, component: Activation, layout: null },
  { path: route.home, component: Home, component1: ChatClient, layout: LayoutHeader },
  { path: route.login, component: LoginPage, layout: null },
  { path: route.signup, component: SignupPage, layout: null },
  { path: route.shop_activation, component: SellerActivation, layout: null },
  { path: route.seller_form, component: SellerForm, layout: null },
];
// ----------------------Routes Shop----------------------------------------------------
const privateRoutesShop = [
  { path: route.dashboard_overview, component: DashBoardOverView, layout: LayoutDashBoard },
  { path: route.dashboard_oders, component: DashBoardOders, layout: LayoutDashBoard },
  { path: route.dashboard_create_product, component: DashBoardCreateProduct, layout: LayoutDashBoard },
  { path: route.dashboard_all_product, component: DashBoardAllproduct, layout: LayoutDashBoard },
  { path: route.dashboard_create_event, component: DashBoardCreateEvent, layout: LayoutDashBoard },
  { path: route.dashboard_all_event, component: DashBoardAllEvent, layout: LayoutDashBoard },
  { path: route.dashboard_all_coupoun, component: DashBoardAllCoupounCode, layout: LayoutDashBoard },
  { path: route.dashboard_messages, component: DashBoardMessages, layout: LayoutDashBoard },
  { path: route.dashboard_messages_id, component: DashBoardMessages, layout: LayoutDashBoard },
];
const publishRoutesShop = [
];
export { privateRoutes, publicRoutes, privateRoutesShop };
