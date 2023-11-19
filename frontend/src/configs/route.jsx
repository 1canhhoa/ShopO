const route = {
  home: '/',
  home_shop: '/home-shop',
  DashBoard_username: '/dashboard/:name',
  login: '/login',
  login_shop: '/login-shop',
  signup: '/signup',
  activation: '/activation/:activationtoken',
  shop_activation: '/shop-activation/:shopToken',
  trackOder: '/track-oder',
  support: '/support',
  products: '/products',
  // navItem
  shop: '/shop',
  faq: '/faq',
  about: '/about',
  blog: '/blog',
  contact: '/contact',
  //
  cart: '/cart',
  //
  product_name: '/product/:name',
  // User
  user: '/user',
  user_account: '/user/account',
  user_purchase: '/user/purchase',
  //user_notications
  user_notications: '/user/notifications',
  user_notications_oder: '/user/notifications/oder',
  user_notications_refunds: '/user/notifications/refunds',
  user_notications_promotion: '/user/notifications/promotion',
  user_notications_wallet: '/user/notifications/wallet',
  user_notications_shopo: '/user/notifications/shopo',
  //user_vouvhers
  user_vouchers: '/user/vouchers',
  //user_accoumt
  user_account_payment: '/user/account/payment',
  user_account_address: '/user/account/address',
  user_account_profile: '/user/account/profile',
  user_account_verify: '/user/account/verify',
  user_account_notification: '/user/account/notification',
  // checkout
  checkout: '/checkout',

  // seller
  seller_form: '/seller/form',
  // view shop from user
  view_shop: '/view-shop/:name',

  // DASHBOARD
  dashboard_overview: '/dashboard/overview/:name',
  dashboard_oders: '/dashboard/oders/:name',
  dashboard_create_product: '/dashboard/create-product/:name',
  dashboard_all_product: '/dashboard/all-product/:name',
  dashboard_create_event: '/dashboard/create-event/:name',
  dashboard_all_event: '/dashboard/all-event/:name',
  dashboard_all_coupoun: '/dashboard/coupouns/:name',
  dashboard_messages: '/dashboard/messages/:name',
  dashboard_messages_id: '/dashboard/messages/:name/:id'

};
export default route;
