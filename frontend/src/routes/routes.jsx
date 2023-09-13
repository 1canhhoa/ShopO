
import route from '~/configs/route';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Home from '~/pages/Home';
import HeaderOnly from '~/layouts/headerOnly/HeaderOnly';
import Account from '~/pages/Account';
import Support from '~/pages/Support';
import TrackOder from '~/pages/TrackOder';
import Shop from '~/pages/Shop'
import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Faq from '~/pages/Faq';
import Activation from '~/pages/Activation';
const publicRoutes = [
  { path: route.home, component: Home, layout: HeaderOnly },
  { path: route.activation, component: Activation, layout: HeaderOnly },
  { path: route.login, component: Login, layout: null },
  { path: route.signup, component: Signup, layout: null },
  { path: route.account, component: Account, layout: HeaderOnly },
  { path: route.support, component: Support, layout: HeaderOnly },
  { path: route.trackOder, component: TrackOder, layout: HeaderOnly },
  { path: route.shop, component: Shop, layout: HeaderOnly },
  { path: route.faq, component: Faq, layout: HeaderOnly },
  { path: route.about, component: About, layout: HeaderOnly },
  { path: route.blog, component: Blog, layout: HeaderOnly },
  { path: route.contact, component: Contact, layout: HeaderOnly },

];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
