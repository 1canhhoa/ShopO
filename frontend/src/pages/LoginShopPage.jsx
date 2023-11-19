import ShopLogin from "~/components/Shop/ShopLogin";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  return <ShopLogin />
}

export default LoginPage;